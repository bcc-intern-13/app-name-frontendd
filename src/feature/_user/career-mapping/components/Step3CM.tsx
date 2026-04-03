'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { stepSchema, type Step3Data } from '@/lib/validations/careerMapping'
import { useCareerMappingStore } from '@/lib/stores/careerMapping'
import { Button } from '@/components/ui/atoms/button'
import { FormField } from '@/components/ui/molecules/form'
import {
  createLabelsOptions,
  getLabelFromOptions,
} from '@/lib/utils/optionUtils'

const NO3_OPTIONS = [
  'Membuat sesuatu yang punya nilai estetika',
  'Memecahkan masalah teknis yang kompleks',
  'Berdiskusi atau brainstorming dengan orang lain',
  'Mengorganisir data atau mengerjakan tugas berulang dengan teliti',
]

const NO3_OPTIONS_WITH_LABELS = createLabelsOptions(NO3_OPTIONS)

export function Step3CM() {
  const { data, addAnswer, currentStep, nextStep, prevStep } = useCareerMappingStore()

  const {
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(stepSchema),
    mode: "onChange",
    defaultValues: {
      answer: '',
    },
  })

  const selectedAnswer = watch('answer')
  const isValid = !!selectedAnswer

  const onSubmit = (formData: Step3Data) => {
    const labelOnly = getLabelFromOptions(formData.answer, NO3_OPTIONS_WITH_LABELS)

    addAnswer(labelOnly)

    if (currentStep < 20) {
      nextStep()
    } else {
      useCareerMappingStore.getState().submitCareerMapping()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className='bg-bl-01 rounded-full text-secondary body-semibold text-center py-1'>
        Pertanyaan {currentStep}
      </div>
      <div>
        <h2 className="h2-bold text-[#252525] mb-2">
          Kalau harus menjelaskan sesuatu ke orang lain, kamu lebih suka?
        </h2>
      </div>

      <FormField error={errors.answer?.message}>
        <div className="grid gap-3">
          {NO3_OPTIONS_WITH_LABELS.map((option) => (
            <button
              key={option.label}
              type="button"
              onClick={() =>
                setValue(
                  'answer',
                  selectedAnswer === option.value ? '' : option.value,
                  { shouldValidate: true }
                )
              }
              className={`p-4 rounded-lg border-2 transition-all font-medium text-left ${
                selectedAnswer === option.value
                  ? 'border-primary bg-primary/5 text-primary'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <span className="font-bold">{option.label}.</span> {option.value}
            </button>
          ))}
        </div>
      </FormField>

      <div className="flex gap-3 pt-4">
        <Button type="button" variant="back" size="lg" className='flex-1' onClick={prevStep}>
          Sebelumnya
        </Button>
        <Button type="submit" variant="lanjut" size="lg" className='flex-1' disabled={!isValid}>
          Lanjut
        </Button>
      </div>
    </form>
  )
}
