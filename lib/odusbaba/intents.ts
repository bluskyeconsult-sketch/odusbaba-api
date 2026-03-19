// lib/odusbaba/intents.ts

export type ODUSBABAIntent =
  | "job_search"
  | "visa_guidance"
  | "hr_dispute"
  | "cv_review"
  | "interview_prep"
  | "hire_va_task";

export const INTENT_MAP = {
  job_search: {
    requiresCountry: true,
    requiresAuth: false,
  },
  visa_guidance: {
    requiresCountry: true,
    requiresAuth: false,
  },
  hr_dispute: {
    requiresCountry: true,
    requiresAuth: true,
  },
  cv_review: {
    requiresAuth: true,
  },
  hire_va_task: {
    requiresAuth: true,
    minTier: "business",
  },
};
