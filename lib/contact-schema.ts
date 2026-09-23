import { z } from "zod";

/** Allowed service chips on the contact form (must match ContactClient options). */
export const CONTACT_SERVICE_OPTIONS = [
  "Experience Design",
  "Creative Production",
  "Digital Experiences",
  "Brand Marketing",
  "Digital & Social Media",
  "Event Management",
  "Museum Digitization",
  "Something else",
] as const;

const namePattern = /^[A-Za-z][A-Za-z\s.'-]{1,79}$/;
const phonePattern = /^\+?[\d\s()-]{10,20}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export const contactSubmissionSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your full name (at least 2 characters).")
    .max(80, "Name must be 80 characters or fewer.")
    .regex(namePattern, "Use letters only for your name (spaces and hyphens are fine)."),
  company: z
    .string()
    .trim()
    .max(120, "Company name must be 120 characters or fewer.")
    .optional()
    .transform((value) => value ?? ""),
  email: z
    .string()
    .trim()
    .min(1, "Enter your email address.")
    .max(120, "Email must be 120 characters or fewer.")
    .regex(emailPattern, "Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .min(1, "Enter a phone number.")
    .max(20, "Phone number is too long.")
    .regex(phonePattern, "Enter a valid phone number with at least 10 digits.")
    .refine((value) => value.replace(/\D/g, "").length >= 10, {
      message: "Enter a phone number with at least 10 digits.",
    })
    .refine((value) => value.replace(/\D/g, "").length <= 15, {
      message: "Phone number cannot exceed 15 digits.",
    }),
  service: z
    .string()
    .trim()
    .min(1, "Select the service you need.")
    .refine(
      (value) => (CONTACT_SERVICE_OPTIONS as readonly string[]).includes(value),
      "Select a valid service from the list."
    ),
  message: z
    .string()
    .trim()
    .min(20, "Add at least 20 characters so we can reply with a useful first note.")
    .max(2000, "Project brief must be 2000 characters or fewer."),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;

export type ContactFieldErrors = Partial<
  Record<keyof ContactSubmissionInput, string>
>;

export function formatContactZodErrors(
  error: z.ZodError
): ContactFieldErrors {
  const fieldErrors: ContactFieldErrors = {};
  for (const issue of error.issues) {
    const key = issue.path[0];
    if (typeof key === "string" && !(key in fieldErrors)) {
      fieldErrors[key as keyof ContactSubmissionInput] = issue.message;
    }
  }
  return fieldErrors;
}

export const SUBMISSION_STATUSES = ["new", "reviewed", "archived"] as const;
export type SubmissionStatus = (typeof SUBMISSION_STATUSES)[number];

export const submissionStatusSchema = z.enum(SUBMISSION_STATUSES);
