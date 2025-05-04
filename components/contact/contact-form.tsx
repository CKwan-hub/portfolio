"use client";

import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 characters." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

export function ContactForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  // Initialize EmailJS
  if (typeof window !== "undefined") {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);
  }

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);

    try {
      const recaptchaToken = await recaptchaRef.current?.executeAsync();
      if (!recaptchaToken) throw new Error("reCAPTCHA failed");

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          title: data.subject,
          message: data.message,
          "g-recaptcha-response": recaptchaToken,
        }
      );

      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      form.reset();
      recaptchaRef.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Message failed to send",
        description:
          error instanceof Error ? error.message : "Something went wrong.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel htmlFor="name-input">Name</FormLabel>
              <FormControl>
                <Input
                  id="name-input"
                  placeholder="Your name"
                  {...field}
                  aria-invalid={formState.errors.name ? "true" : undefined}
                  aria-describedby={
                    formState.errors.name ? "name-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="name-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel htmlFor="email-input">Email</FormLabel>
              <FormControl>
                <Input
                  id="email-input"
                  placeholder="your.email@example.com"
                  {...field}
                  aria-invalid={formState.errors.email ? "true" : undefined}
                  aria-describedby={
                    formState.errors.email ? "email-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="email-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel htmlFor="phone-input">Phone</FormLabel>
              <FormControl>
                <Input
                  id="phone-input"
                  placeholder="012-345-6789"
                  {...field}
                  aria-invalid={formState.errors.phone ? "true" : undefined}
                  aria-describedby={
                    formState.errors.phone ? "phone-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="phone-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="subject"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel htmlFor="subject-input">Subject</FormLabel>
              <FormControl>
                <Input
                  id="subject-input"
                  placeholder="What is this regarding?"
                  {...field}
                  aria-invalid={formState.errors.subject ? "true" : undefined}
                  aria-describedby={
                    formState.errors.subject ? "subject-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="subject-error" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field, formState }) => (
            <FormItem>
              <FormLabel htmlFor="message-input">Message</FormLabel>
              <FormControl>
                <Textarea
                  id="message-input"
                  placeholder="Your message..."
                  className="min-h-[120px]"
                  {...field}
                  aria-invalid={formState.errors.message ? "true" : undefined}
                  aria-describedby={
                    formState.errors.message ? "message-error" : undefined
                  }
                />
              </FormControl>
              <FormMessage id="message-error" />
            </FormItem>
          )}
        />

        {/* Invisible reCAPTCHA */}
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
          size="invisible"
          ref={recaptchaRef}
        />

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}