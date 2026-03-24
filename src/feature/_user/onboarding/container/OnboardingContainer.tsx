// app/onboarding/page.tsx
'use client'

import { useOnboardingStore } from '@/lib/stores/onboarding'
import { Step1 } from '../components/Step1'
// import { Step2 } from '@/components/onboarding/Step2'
// import { Step3 } from '@/components/onboarding/Step3'
// import { Step4 } from '@/components/onboarding/Step4'
// import { Step5 } from '@/components/onboarding/Step5'
// import { Step6 } from '@/components/onboarding/Step6'
// import { Progress } from '@/components/ui/progress'
import { ChevronLeft } from 'lucide-react'

const TOTAL_STEPS = 6

export default function OnboardingContainer() {
  const { currentStep, prevStep, getProgress } = useOnboardingStore()

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 />
      case 2:
    //     return <Step2 />
    //   case 3:
    //     return <Step3 />
    //   case 4:
    //     return <Step4 />
    //   case 5:
    //     return <Step5 />
    //   case 6:
    //     return <Step6 />
      default:
        return <Step1 />
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            {/* Back button (hidden on first step) */}
            {currentStep > 1 && (
              <button
                onClick={prevStep}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="text-sm font-medium">Kembali</span>
              </button>
            )}

            {/* Step indicator */}
            <div className="ml-auto text-sm text-gray-600 font-medium">
              Langkah {currentStep} dari {TOTAL_STEPS}
            </div>
          </div>

          {/* Progress bar
          <Progress value={getProgress()} className="h-2" /> */}
        </div>

        {/* Step content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          {renderStep()}
        </div>

        {/* Footer info */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Informasi kamu aman bersama kami 🔒
        </p>
      </div>
    </div>
  )
}