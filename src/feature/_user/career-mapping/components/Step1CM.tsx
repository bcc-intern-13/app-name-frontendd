'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { stepSchema, type Step1Data } from '@/lib/validations/careerMapping'
import { useCareerMappingStore } from '@/lib/stores/careerMapping'
import { Button } from '@/components/ui/atoms/button'
import { FormField } from '@/components/ui/molecules/form'
import { 
  createLabelsOptions, 
  getLabelFromOptions,
  type OptionWithLabel 
} from '@/lib/utils/optionUtils'

const NO1_OPTIONS = [
  'Coret-coret ide, gambar, atau eksplorasi referensi visual',
  'Coba aplikasi baru, nonton tutorial tech, atau otak-atik peringkat',
  'Ngobrol panjang dengan teman atau gabung komunitas online',
  'Rapikan file, buat to-do-list, atau beresin sesuatu sampai tuntas',
]

const NO1_OPTIONS_WITH_LABELS = createLabelsOptions(NO1_OPTIONS)

export function Step1CM() {
  const { data, addAnswer, currentStep, nextStep, prevStep } = useCareerMappingStore()

  const {
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(stepSchema),
    mode: "onChange",
    defaultValues: {
      answer: '',
    },
  })

  const selectedAnswer = watch('answer')
  const isValid = !!selectedAnswer

  const onSubmit = (formData: Step1Data) => {
    const labelOnly = getLabelFromOptions(formData.answer, NO1_OPTIONS_WITH_LABELS)

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
          Saat punya waktu bebas, kamu lebih sering?
        </h2>
      </div>

      <FormField error={errors.answer?.message}>
        <div className="grid gap-3">
          {NO1_OPTIONS_WITH_LABELS.map((option) => (
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

      {currentStep > 1 && (
        <div className='w-full grid grid-cols-2  gap-4'>
            <Button onClick={prevStep} variant={"back"}  size={"lg"}>
            Back
            </Button>

            <Button type="submit" variant={"lanjut"} size="lg" className='w-full'>
            Lanjut
            </Button>
        </div>
        )}
        {currentStep == 1 && (
        <Button type="submit" variant={"lanjut"} size="lg" className='w-full'>
            Lanjut
        </Button>
        )}
    </form>
  )
}
