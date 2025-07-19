// src/schemas/contactSchema.ts
import { z } from "zod";

export const contactSchema = z.object({

  name: z
    .string()
    .min(2, "Enter a valid name (too short)")
    .max(50, "Enter a valid name (too large)")
    .regex(
      /^[a-zA-Z\s'-]+$/,
      "Enter a valid name"
    )
    .trim()
    .transform((val) => val.replace(/\s+/g, " ")),

  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Invalid email address")
    .max(100, "Invalid email address")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Email must be a valid format (e.g., user@domain.com)"
    )
    .transform((val) => val.toLowerCase().trim()),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^\+?[1-9]\d{1,14}$/.test(val.replace(/\D/g, "")),
      "Enter a valid phone number"
    )
    .transform((val) => (val ? val.replace(/\D/g, "") : undefined)),

  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters long")
    .max(100, "Subject must not exceed 100 characters")
    .regex(/^[a-zA-Z0-9\s.,!?'-]+$/, "Subject contains invalid characters")
    .trim()
    .transform((val) => val.replace(/\s+/g, " ")),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(1000, "Message must not exceed 1000 characters")
    .regex(
      /^[a-zA-Z0-9\s.,!?@#$%^&*()_+-=;:'"<>[\]{}\\/]+$/,
      "Message contains invalid characters"
    )
    .trim()
    .transform((val) => val.replace(/\s+/g, " ")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
