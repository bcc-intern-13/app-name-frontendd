import z from "zod"

export const stepSchema = z.object({
  answer: z.string().min(1, 'Jawaban wajib dipilih'),
})

export const completeCareerMappingSchema = z.object({
  answers: z
    .array(z.string().min(1, 'Jawaban wajib dipilih'))
    .length(20, 'Harus ada 20 jawaban'),
})

export type Step1Data = z.infer<typeof stepSchema>
export type Step2Data = z.infer<typeof stepSchema>
export type Step3Data = z.infer<typeof stepSchema>
export type Step4Data = z.infer<typeof stepSchema>
export type Step5Data = z.infer<typeof stepSchema>
export type Step6Data = z.infer<typeof stepSchema>
export type Step7Data = z.infer<typeof stepSchema>
export type Step8Data = z.infer<typeof stepSchema>
export type Step9Data = z.infer<typeof stepSchema>
export type Step10Data = z.infer<typeof stepSchema>
export type Step11Data = z.infer<typeof stepSchema>
export type Step12Data = z.infer<typeof stepSchema>
export type Step13Data = z.infer<typeof stepSchema>
export type Step14Data = z.infer<typeof stepSchema>
export type Step15Data = z.infer<typeof stepSchema>
export type Step16Data = z.infer<typeof stepSchema>
export type Step17Data = z.infer<typeof stepSchema>
export type Step18Data = z.infer<typeof stepSchema>
export type Step19Data = z.infer<typeof stepSchema>
export type Step20Data = z.infer<typeof stepSchema>
export type CompleteCareerMappingData = z.infer<typeof completeCareerMappingSchema>