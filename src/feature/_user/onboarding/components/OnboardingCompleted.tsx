import { useOnboardingStore } from '@/lib/stores/onboarding'
import { Step10Data } from '@/lib/validations/onboarding'
import React from 'react'
import { useToast } from '@/shared/hooks/useToast'
import { Button } from '@/components/ui/atoms/button'
import { useRouter } from 'next/navigation'

const OnboardingCompleted = () => {
  const { data } = useOnboardingStore()
  const { showToast } = useToast()
  const router = useRouter()

  const onSubmit = async () => {
      try {
      const result = await useOnboardingStore.getState().submitOnboarding()

      if (!result.success) {
        throw new Error(result.error)
      }

      showToast({
        type: 'success',
        title: 'Onboarding terkirim',
        message: 'Terima kasih telah melengkapi data diri kamu!',
      })

      router.push('/beranda')
    } catch (error) {
      if (error instanceof Error) {
        const errorMessage = error instanceof Error ? error.message : 'Onboarding gagal';
        showToast({
          type: 'error',
          title: 'Onboarding gagal',
          message: errorMessage,
        })
      }
    }
    }

  return (
    <div>
        <div className='text-center'>
          <h2 className="h2-bold text-[#252525] mb-2">
            Profil Siap!
          </h2>
          <p className="text-[#252525] body-regular whitespace-normal mb-4">
            WorkAble sudah mengenal kamu lebih baik. Berikut rekomendasi bidang karier berdasarkan jawabanmu:
          </p>

          <div className='grid grid-cols-2 md:grid-cols-4 items-center justify-center gap-4'>
            <div className='bg-transparent rounded-full border-3 border-secondary text-secondary caption-semibold text-center py-2 px-4'>
              {data.job_field}
            </div>
            <div className='bg-transparent rounded-full border-3 border-secondary text-secondary caption-semibold text-center py-2 px-4'>
              {data.job_type}
            </div>
            <div className='bg-transparent rounded-full border-3 border-secondary text-secondary caption-semibold text-center py-2 px-4'>
              {data.communication_preference}
            </div>
            <div className='bg-transparent rounded-full border-3 border-secondary text-secondary caption-semibold text-center py-2 px-4'>
              {data.city}
            </div>
          </div>
          <Button onClick={onSubmit} variant={"lanjut"} size="lg" className='w-full mt-8'>
            Mulai Cari Pekerjaan
          </Button>
        </div>
      </div>
  )
}

export default OnboardingCompleted