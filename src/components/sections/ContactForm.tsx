"use client";

import { useActionState, useEffect, useRef } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Loader2, Send } from "lucide-react";
import { sendEmail } from "@/lib/contactAction";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

interface FormState {
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
}

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialState: FormState = {
  message: "",
  errors: {},
};

const ContactForm = () => {
  const { toast } = useToast();
  const [state, formAction] = useActionState(sendEmail, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  const methods = useForm<FormValues>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { control, formState, reset } = methods;
  const { isSubmitting } = formState;

  // Handle form state updates and show toast notifications
  useEffect(() => {
    if (!state.message) return;

    const hasErrors = state.errors && Object.keys(state.errors).length > 0;

    if (hasErrors) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Success!",
        description: state.message,
      });
      formRef.current?.reset();
    }
  }, [state, toast]);

  return (
    <FormProvider {...methods}>
      <Form {...methods}>
        <form ref={formRef} action={formAction} className="space-y-6">
          {/* Name Field */}
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Full Name</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    autoComplete="name"
                    className="bg-background"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{state.errors?.name?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* Email Field */}
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className="bg-background"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{state.errors?.email?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* Message Field */}
          <FormField
            control={control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormControl>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={5}
                    className="bg-background resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage>{state.errors?.message?.[0]}</FormMessage>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isSubmitting}
            aria-label={isSubmitting ? "Sending message" : "Send message"}
          >
            {isSubmitting ? (
              <>
                <Loader2
                  className="mr-2 h-4 w-4 animate-spin"
                  aria-hidden="true"
                />
                <span>Sending Message...</span>
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>Send Message</span>
              </>
            )}
          </Button>
        </form>
      </Form>
    </FormProvider>
  );
};

export default ContactForm;