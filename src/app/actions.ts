"use server";

import { contactFormSchema, type ContactFormValues } from '@/lib/schema';
import { connectDB, ContactForm } from '@/lib/database';

interface FormSubmissionResult {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function submitContactForm(
  data: ContactFormValues
): Promise<FormSubmissionResult> {
  const validationResult = contactFormSchema.safeParse(data);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Invalid form data. Please check the fields.",
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  try {
 await connectDB(); // Connect to the database
 const newSubmission = new ContactForm(validationResult.data);
 await newSubmission.save(); // Save the data to the database
  } catch (error) {
 console.error("Error saving form submission to database:", error);
    return { success: false, message: "Failed to save form submission." };
  }

  // Simulate a delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a possible server error
  // if (Math.random() > 0.8) {
  //   return { success: false, message: "An unexpected error occurred. Please try again." };
  // }

  return {
    success: true,
    message: "Thank you for your message! I'll get back to you soon.",
  };
}
