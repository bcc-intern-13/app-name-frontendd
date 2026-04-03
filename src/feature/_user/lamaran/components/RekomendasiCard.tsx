'use client'

import Image from "next/image"

interface Recommendation {
  id: string
  company: string
  type: string
}

interface Props {
  recommendation: Recommendation
}

export function RekomendasiCard({ recommendation }: Props) {
  return (
    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200 hover:bg-green-100 transition-colors">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center">
          <Image src={'/GojekLogo.webp'} alt={'GojekLogo'} width={500} height={500} />
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{recommendation.company}</p>
          <p className="text-xs text-gray-600">{recommendation.type}</p>
        </div>
      </div>
      <button className="text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors">
        Lamar
      </button>
    </div>
  )
}