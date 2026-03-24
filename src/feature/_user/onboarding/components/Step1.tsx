'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { step1Schema, type Step1Data } from '@/lib/validations/onboarding'
import { useOnboardingStore } from '@/lib/stores/onboarding'
import { Button } from '@/components/ui/atoms/button'
import { Input } from '@/components/ui/atoms/input'
import { FormField } from '@/components/ui/molecules/form'

export function Step1() {
  const { data, updateData, nextStep } = useOnboardingStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      fullName: data.fullName || '',
    },
  })

  const onSubmit = (formData: Step1Data) => {
    updateData(formData)
    nextStep()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Siapa nama kamu?
        </h2>
        <p className="text-gray-600">
          Kami ingin mengenal kamu lebih dekat untuk memberikan pengalaman terbaik
        </p>
      </div>

      <FormField label="Nama Lengkap" error={errors.fullName?.message} required>
        <Input
          type="text"
          placeholder="Masukkan nama lengkap"
          {...register('fullName')}
          className={errors.fullName ? 'border-destructive' : ''}
          autoFocus
        />
      </FormField>

      <Button type="submit" variant={"default"} className="w-full" size="lg">
        Lanjutkan
      </Button>
    </form>
  )
}