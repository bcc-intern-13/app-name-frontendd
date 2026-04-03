'use client'

import { Step1CM } from '../components/Step1CM'
import { Step2CM } from '../components/Step2CM'
import { Step3CM } from '../components/Step3CM'
import { Step4CM } from '../components/Step4CM'
import { Step5CM } from '../components/Step5CM'
import { Step6CM } from '../components/Step6CM'
import { Step7CM } from '../components/Step7CM'
import { Step8CM } from '../components/Step8CM'
import { Step9CM } from '../components/Step9CM'
import { Step10CM } from '../components/Step10CM'
import { Step11CM } from '../components/Step11CM'
import { Step12CM } from '../components/Step12CM'
import { Step13CM } from '../components/Step13CM'
import { Step14CM } from '../components/Step14CM'
import { Step15CM } from '../components/Step15CM'
import { Step16CM } from '../components/Step16CM'
import { Step17CM } from '../components/Step17CM'
import { Step18CM } from '../components/Step18CM'
import { Step19CM } from '../components/Step19CM'
import { Step20CM } from '../components/Step20CM'
import StartPage from '../components/StartPage'
import ResultPage from '../components/ResultPage'
import { useCareerMappingStore } from '@/lib/stores/careerMapping'

export const TOTAL_STEPS = 20

export default function CareerMappingContainer() {
  const { currentStep, pageType } = useCareerMappingStore()

  if (pageType === 'start') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-sm md:max-w-2xl mx-auto my-34">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-4 mb-8">
            <StartPage />
          </div>
        </div>
      </div>
    )
  }

  if (pageType === 'result') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-sm md:max-w-2xl mx-auto my-34">
          <div className="">
            <ResultPage />
          </div>
        </div>
      </div>
    )
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1CM />
      case 2:
        return <Step2CM />
      case 3:
        return <Step3CM />
      case 4:
        return <Step4CM />
      case 5:
        return <Step5CM />
      case 6:
        return <Step6CM />
      case 7:
        return <Step7CM />
      case 8:
        return <Step8CM />
      case 9:
        return <Step9CM />
      case 10:
        return <Step10CM />
      case 11:
        return <Step11CM />
      case 12:
        return <Step12CM />
      case 13:
        return <Step13CM />
      case 14:
        return <Step14CM />
      case 15:
        return <Step15CM />
      case 16:
        return <Step16CM />
      case 17:
        return <Step17CM />
      case 18:
        return <Step18CM />
      case 19:
        return <Step19CM />
      case 20:
        return <Step20CM />
      default:
        return <Step1CM />
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-sm md:max-w-2xl mx-auto my-34">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-4 mb-8 ">
          {renderStep()}
        </div>
      </div>
    </div>
  )
}