import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, 'Email wajib diisi')
    .email('Format email tidak valid'),
  password: z
    .string()
    .min(1, 'Password wajib diisi')
    .min(8, 'Password minimal 8 karakter'),
})

// export const registerSchema = z
//   .object({
//     name: z
//       .string()
//       .min(1, 'Nama lengkap wajib diisi')
//       .min(3, 'Nama minimal 3 karakter')
//       .max(100, 'Nama maksimal 100 karakter'),
//     email: z
//       .string()
//       .min(1, 'Email wajib diisi')
//       .email('Format email tidak valid'),
//     password: z
//       .string()
//       .min(1, 'Password wajib diisi')
//       .min(8, 'Password minimal 8 karakter')
//       .regex(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
//         'Password harus mengandung huruf besar, huruf kecil, dan angka'
//       ),
//     confirmPassword: z.string().min(1, 'Konfirmasi password wajib diisi'),
//     role: z.enum(['job_seeker', 'employer'], {
//       required_error: 'Pilih role terlebih dahulu',
//     }),
//     disabilityType: z.string().optional(),
//     acceptTerms: z
//       .boolean()
//       .refine((val) => val === true, {
//         message: 'Anda harus menyetujui syarat dan ketentuan',
//       }),
//   })
//   .refine((data) => data.password === data.confirmPassword, {
//     message: 'Password tidak cocok',
//     path: ['confirmPassword'],
//   })
//   .refine(
//     (data) => {
//       if (data.role === 'job_seeker' && !data.disabilityType) {
//         return false
//       }
//       return true
//     },
//     {
//       message: 'Tipe disabilitas wajib dipilih untuk pencari kerja',
//       path: ['disabilityType'],
//     }
//   )

export type LoginFormData = z.infer<typeof loginSchema>
// export type RegisterFormData = z.infer<typeof registerSchema>