'use client'

import { Button } from '@/components/ui/atoms/button'
import { useCareerMappingStore } from '@/lib/stores/careerMapping'
import { Info } from 'lucide-react'

export default function StartPage() {
  const { setPageType, setCurrentStep } = useCareerMappingStore()

  const handleStart = () => {
    setPageType('careerMapping')
    setCurrentStep(1)
  }

  return (
    <div className="text-center space-y-6">
      <div>
        <h2 className="h2-bold text-[#252525] mb-2">
          Career Mapping
        </h2>
        <p className="text-[#757575] body-regular whitespace-normal">
          Jawab 20 pertanyaan singkat dan temukan jalur karier yang paling cocok untukmu. Hasilnya akan tersimpan otomatis ke Smart Profile kamu.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-4 p-4">
            <div className="bg-bl-01 rounded-xl border-2 border-secondary text-center p-1">
                <p className="h3-bold text-secondary">
                    20
                </p>
                <p className="caption-regular ">
                    Pertanyaan
                </p>
            </div>
            <div className="bg-bl-01 rounded-xl border-2 border-secondary text-center p-1">
                <p className="h3-bold text-secondary">
                    5-7
                </p>
                <p className="caption-regular ">
                    Menit
                </p>
            </div>
            <div className="bg-bl-01 rounded-xl border-2 border-secondary text-center p-1">
                <p className="h3-bold text-secondary">
                    3
                </p>
                <p className="caption-regular ">
                    Rekomendasi
                </p>
            </div>
        </div>

      <div className="bg-white border-4 border-secondary rounded-4xl flex items-center gap-4 p-4 space-y-2">
        <Info className='text-secondary w-10 h-10'/>
        <p className="body-semibold text-secondary">
          Pertanyaan tidak bisa diulang setelah dijawab. Pastikan kamu siap sebelum mulai.
        </p>
      </div>

      <Button 
        onClick={handleStart} 
        variant="default" 
        size="lg" 
        className='w-full'
      >
        Mulai Career Mapping
      </Button>
    </div>
  )
}
