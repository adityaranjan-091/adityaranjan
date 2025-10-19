"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

interface FormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

export async function sendEmail(
  prevState: any,
  formData: FormData
): Promise<FormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
    };
  }

  const { name, email, message } = validatedFields.data;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER, // authenticated Gmail account
    replyTo: email, // Sender's email
    to: process.env.GMAIL_USER, // email where message will receive notifications
    subject: `Portfolio Contact: ${name}`,
    text: `
New Contact Form Submission
====================================

FROM:
Name: ${name}
Email: ${email}

MESSAGE:
${message}

====================================
Sent via your portfolio website contact form
  `.trim(),
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #f5f5f5;">
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; max-width: 600px; margin: 40px auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);">
        
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 32px 24px; text-align: center;">
          <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 600; letter-spacing: -0.5px;">New Contact Message</h1>
          <p style="margin: 8px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">Portfolio Website</p>
        </div>
        
        <!-- Content -->
        <div style="padding: 32px 24px;">
          <p style="margin: 0 0 24px 0; font-size: 15px; line-height: 1.6; color: #4a5568;">
            You've received a new message through your portfolio contact form.
          </p>
          
          <!-- Sender Information -->
          <div style="background-color: #f7fafc; padding: 20px; border-radius: 8px; margin-bottom: 24px; border-left: 4px solid #667eea;">
            <div style="margin-bottom: 12px;">
              <span style="display: inline-block; font-size: 13px; color: #718096; font-weight: 600; margin-bottom: 4px;">FROM</span>
              <p style="margin: 0; font-size: 16px; color: #2d3748; font-weight: 500;">${name}</p>
            </div>
            <div>
              <span style="display: inline-block; font-size: 13px; color: #718096; font-weight: 600; margin-bottom: 4px;">EMAIL</span>
              <p style="margin: 0; font-size: 14px;">
                <a href="mailto:${email}" style="color: #667eea; text-decoration: none; font-weight: 500;">${email}</a>
              </p>
            </div>
          </div>
          
          <!-- Message Content -->
          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 12px 0; font-size: 13px; font-weight: 600; color: #718096; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
            <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; font-size: 15px; line-height: 1.7; color: #2d3748; white-space: pre-wrap; word-wrap: break-word;">
${message}
            </div>
          </div>
          
          <!-- Action Button -->
          <div style="text-align: center; margin-top: 28px;">
            <a href="mailto:${email}?subject=Re: Your message from portfolio" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: #ffffff; text-decoration: none; padding: 12px 32px; border-radius: 6px; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
          </div>
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f7fafc; padding: 20px 24px; border-top: 1px solid #e2e8f0; text-align: center;">
          <p style="margin: 0; font-size: 13px; color: #718096; line-height: 1.5;">
            This message was sent via your portfolio website contact form
          </p>
          <p style="margin: 8px 0 0 0; font-size: 12px; color: #a0aec0;">
            ${new Date().toLocaleString("en-US", {
              dateStyle: "full",
              timeStyle: "short",
            })}
          </p>
        </div>
        
      </div>
    </body>
    </html>
  `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { message: "Message sent successfully!", errors: {} };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      message: "Failed to send message. Please try again later.",
      errors: {},
    };
  }
}
