// src/schemas/contactSchema.ts
import { z } from "zod";
import { EMAIL_PATTERN, MESSAGE_PATTERN, MOBILE_PATTERN, NAME_PATTERN, SUBJECT_PATTERN } from "./valiationSchema";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Enter a valid name (too short)")
    .max(255, "Enter a valid name (too large)")
    .regex(NAME_PATTERN, "Enter a valid name, only letters and spaces allowed")
    .trim()
    .transform((val) => val.replace(/\s+/g, " ")),

  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Invalid email address")
    .max(255, "Invalid email address")
    .regex(
      EMAIL_PATTERN,
      "Email must be a valid format (e.g., user@domain.com)"
    )
    .transform((val) => val.toLowerCase().trim()),

  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || MOBILE_PATTERN.test(val),
      "Enter a valid 10-digit phone number"
    )
    .transform((val) => (val ? val.replace(/\D/g, "") : undefined)),

  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters long")
    .max(255, "Subject must not exceed 255 characters")
    .regex(SUBJECT_PATTERN, "Subject contains invalid characters")
    .trim()
    .transform((val) => val.replace(/\s+/g, " ")),

  message: z
    .string()
    .min(15, "Message must be at least 15 characters long")
    .max(1000, "Message must not exceed 1000 characters")
    .regex(
      MESSAGE_PATTERN, "Message contains invalid characters"
    )
    .trim()
    .transform((val) => val.replace(/\s+/g, " ")),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
