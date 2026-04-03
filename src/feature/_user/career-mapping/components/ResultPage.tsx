'use client'

import { Button } from '@/components/ui/atoms/button'
import { useCareerMappingStore } from '@/lib/stores/careerMapping'
import { useRouter } from 'next/navigation'

export default function ResultPage() {
  const { result, resetCareerMapping } = useCareerMappingStore()
  const router = useRouter()

  const handleGoHome = () => {
    resetCareerMapping()
    router.push('/beranda')
  }

  const handleRetake = () => {
    resetCareerMapping()
  }

  if (!result || !result.top_categories) {
    return (
      <div className="text-center space-y-6">
        <p>Loading...</p>
      </div>
    )
  }

  const categories = result.top_categories

  const renderCategoryCard = (category: typeof categories[0], index: number) => {
    const colors = [
      { bg: 'bg-[#FF7300]', border: 'border-[#FF7300]', text: 'text-[#FF7300]', jobBg: 'bg-bl-01', jobBorder: 'border-[#757575]', sideBg: 'bg-[#FFD4B0]', sideText: 'text-[#E66800]', sideBorder: 'border-[#E66800]' },
      { bg: 'bg-secondary', border: 'border-secondary', text: 'text-secondary', jobBg: 'bg-bl-01', jobBorder: 'border-[#757575]', sideBg: 'bg-[#FFD4B0]', sideText: 'text-[#E66800]', sideBorder: 'border-[#E66800]' },
      { bg: 'bg-[#5A5A5A]', border: 'border-[#5A5A5A]', text: 'text-[#5A5A5A]', jobBg: 'bg-bl-01', jobBorder: 'border-[#757575]', sideBg: 'bg-[#FFD4B0]', sideText: 'text-[#E66800]', sideBorder: 'border-[#E66800]' }
    ]
    const color = colors[index] || colors[2]

    return (
      <div key={category.rank} className={`bg-white border ${color.border} rounded-2xl p-4 space-y-4`}>
        <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
          <div className={`${color.bg} rounded-xl p-3`}>
            <p className='h3-semibold text-white'>
              #{category.rank}
            </p>
          </div>
          <div className='text-left flex-1'>
            <p className='title-semibold'>
              {category.name}
            </p>
            <p className='caption-regular text-[#252525] mt-1'>
              {category.description}
            </p>
          </div>
          <div>
            <p className={`text-2xl font-bold md:h2-bold ${color.text}`}>
              {category.score}
            </p>
            <p className='caption-regular text-[#252525]'>
              poin
            </p>
          </div>
        </div>
        <div className='space-y-2'>
          <div className='space-y-2'>
            <p className='caption-semibold text-[#757575] text-left'>
              PEKERJAAN FORMAL
            </p>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-2'>
              {category.formal_jobs.slice(0, 8).map((job: string, jobIndex: number) => (
                <div key={jobIndex} className={`${color.jobBg} rounded-full border ${color.jobBorder} w-fit px-2 py-1 text-sm flex items-center justify-center whitespace-normal`}>
                  {job}
                </div>
              ))}
            </div>
          </div>
          <div className='space-y-2'>
            <p className='caption-semibold text-[#757575] text-left'>
              WIRAUSAHA/UMKM
            </p>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-2'>
              {category.side_jobs.slice(0, 8).map((job: string, jobIndex: number) => (
                <div key={jobIndex} className={`${color.sideBg} ${color.sideText} rounded-full border ${color.sideBorder} w-fit px-2 py-1 text-sm`}>
                  {job}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="text-center space-y-6">
      <div className='bg-primary py-6 px-5 rounded-2xl space-y-4'>
         <div className='bg-bl-03 w-fit mx-auto rounded-full border-3 border-secondary text-sm font-semibold text-secondary text-center py-1 px-4'>
            HASIL CAREER MAPPING
         </div>
        
        <h2 className="h2-bold text-white mb-2">
          Karirmu Sudah Terpetakan!
        </h2>
        <p className="text-bl-03 body-regular whitespace-normal">
          Berdasarkan 20 jawabanmu, berikut adalah 3 jalur karier yang paling cocok untukmu.
        </p>

        <div className='flex md:flex-row items-center justify-center gap-4 md:gap-2'>
          {categories.map((category, index) => {
            const colors = [
              { bg: 'border-[#FF7300]', text: 'text-[#FF7300]' },
              { bg: 'border-secondary', text: 'text-secondary' },
              { bg: 'border-[#757575]', text: 'text-[#757575]' }
            ]
            const color = colors[index] || colors[2]
            
            return (
              <div key={category.rank} className={`bg-white flex gap-2 items-center justify-center rounded-4xl border p-4 md:p-8 ${color.bg}`}>
                <p className='text-xl md:text-2xl font-semibold md:h2-semibold'>
                  {category.code} :
                </p>
                <div>
                  <p className={`text-xl md:text-2xl font-bold md:h2-bold ${color.text}`}>
                    {category.score}
                  </p>
                  <p className='caption-regular text-[#252525]'>
                    poin
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

        {renderCategoryCard(categories[0], 0)}
        {renderCategoryCard(categories[1], 1)}
        {renderCategoryCard(categories[2], 2)}

        <div className="flex gap-3 pt-4">
          <Button
            onClick={handleRetake}
            variant="back"
            size="lg"
            className='flex-1'
          >
            Ulang
          </Button>
          <Button
            onClick={handleGoHome}
            variant="lanjut"
            size="lg"
            className='flex-1'
          >
            Mulai Cari Pekerjaan
          </Button>
        </div>
    </div>
  )
}
