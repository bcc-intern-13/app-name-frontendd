// lib/validations/onboarding.ts
import { z } from 'zod'

// Step 1: Basic Info
export const step1Schema = z.object({
  fullName: z
    .string()
    .min(1, 'Nama lengkap wajib diisi')
    .min(3, 'Nama minimal 3 karakter')
    .max(100, 'Nama maksimal 100 karakter'),
})

// Step 2: Age
export const step2Schema = z.object({
  age: z
    .string()
    .min(1, 'Usia wajib dipilih')
    .refine((val) => !isNaN(Number(val)), 'Usia harus berupa angka'),
})

// Step 3: Location
export const step3Schema = z.object({
  city: z.string().min(1, 'Kota wajib diisi'),
})

// Step 4: Education
export const step4Schema = z.object({
  education: z
    .string()
    .min(1, 'Pendidikan terakhir wajib dipilih'),
})

// Step 5: Disability Type
export const step5Schema = z.object({
  disabilityType: z
    .string()
    .min(1, 'Tipe disabilitas wajib dipilih'),
})

// Step 6: Job Preference
export const step6Schema = z.object({
  jobType: z
    .string()
    .min(1, 'Tipe pekerjaan wajib dipilih'),
})

// Complete onboarding schema (for final submission)
export const completeOnboardingSchema = z.object({
  fullName: step1Schema.shape.fullName,
  age: step2Schema.shape.age,
  city: step3Schema.shape.city,
  education: step4Schema.shape.education,
  disabilityType: step5Schema.shape.disabilityType,
  jobType: step6Schema.shape.jobType,
})

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type Step4Data = z.infer<typeof step4Schema>
export type Step5Data = z.infer<typeof step5Schema>
export type Step6Data = z.infer<typeof step6Schema>
export type CompleteOnboardingData = z.infer<typeof completeOnboardingSchema>