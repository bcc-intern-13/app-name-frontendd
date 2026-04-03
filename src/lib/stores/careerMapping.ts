import { create } from "zustand"
import { persist } from "zustand/middleware"
import { CompleteCareerMappingData } from "../validations/careerMapping"
import { careerMappingService } from "@/api/services/careerMapping"

type PageType = 'start' | 'careerMapping' | 'result'

interface CareerMappingResult {
  top_categories: Array<{
    rank: number
    code: string
    name: string
    score: number
    description: string
    formal_jobs: string[]
    side_jobs: string[]
  }>
  all_scores: Record<string, number>
  attempt_number: number
  created_at: string
}

interface CareerMappingStore {
    currentStep: number
    pageType: PageType
    data: Partial<CompleteCareerMappingData>
    result: CareerMappingResult | null
    setCurrentStep: (step: number) => void
    setPageType: (pageType: PageType) => void
    nextStep: () => void
    prevStep: () => void
    updateData: (newData: Partial<CompleteCareerMappingData>) => void
    addAnswer: (answer: string) => void
    setResult: (result: CareerMappingResult) => void
    resetCareerMapping: () => void
    
    isStepCompleted: (step: number) => boolean
    submitCareerMapping: () => Promise<{ success: boolean; error?: string }>

    TOTAL_STEPS: number
}

export const useCareerMappingStore = create<CareerMappingStore>()(
  persist(
    (set, get) => ({
      currentStep: 1,
      pageType: 'start',
      data: {},
      result: null,
      setCurrentStep: (step) => set({ currentStep: step }),
      setPageType: (pageType) => set({ pageType }),
      nextStep: () => {
        const { currentStep } = get()
        if (currentStep < 20) {
          set({ currentStep: currentStep + 1 })
        } else if (currentStep === 20) {
          set({ pageType: 'result' })
        }
      },
      
      prevStep: () => {
        const { currentStep } = get()
        if (currentStep > 1) {
          set({ currentStep: currentStep - 1 })
        }
      },
      
      updateData: (newData) => {
        set((state) => ({
          data: { ...state.data, ...newData }
        }))
      },

      TOTAL_STEPS: 20,

      addAnswer: (answer) => {
        set((state) => ({
          data: {
            ...state.data,
            answers: [...(state.data.answers || []), answer],
          },
        }))
      },

      setResult: (result) => set({ result }),
      
      resetCareerMapping: () => {
        set({ currentStep: 1, data: {}, result: null, pageType: 'start' })
      },
      isStepCompleted: (step) => {
        const { data } = get()
        const answers = data.answers || []

        return answers.length >= step
      },

      submitCareerMapping: async () => {
        const { data } = get()
        try {
          // Submit answers
          await careerMappingService.submitCareerMapping(data as CompleteCareerMappingData)
          
          // Fetch result
          const resultResponse = await careerMappingService.getCareerMappingResult()
          if (resultResponse.success) {
            get().setResult(resultResponse.data)
          }
          
          set({ pageType: 'result' })
          return { success: true }
        } catch (error) {
          return { success: false, error: error instanceof Error ? error.message : 'Gagal submit career mapping' }
        }
      },
    }),
    {
      name: 'career-mapping-storage',
    }
  )
)