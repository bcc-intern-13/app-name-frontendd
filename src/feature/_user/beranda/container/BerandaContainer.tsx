import React from 'react'
import HeaderBeranda from '../components/HeaderBeranda'
import RekomendasiLamaran from '../components/RekomendasiLamaran'
import LamaranBeranda from '../components/LamaranBeranda'
import CareerMappingBeranda from '../components/CareerMappingBeranda'
import { ArrowRightFromLine } from 'lucide-react'
import { Button } from '@/components/ui/atoms/button'
import Link from 'next/link'

const BerandaContainer = () => {
  return (
    <section className='relative mx-auto md:max-w-7xl'>
        <div className='w-full flex items-center justify-center '>
          <div className='max-w-6xl pt-34 lg:flex justify-between gap-4 block w-full px-4 md:px-8 lg:px-0'>
            <div className='w-full md:w-[65%] space-y-8 '>
              <HeaderBeranda/>
              <RekomendasiLamaran/>
            </div>

            <div className='w-full md:w-[35%] mt-8 lg:mt-0 space-y-8'>
              <CareerMappingBeranda/>
              <LamaranBeranda/>
              <Link href="/onboarding">
                  <Button variant={"lanjut"} size={"lg"}>
                      Mulai Onboarding 
                      <ArrowRightFromLine/>
                  </Button>
              </Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default BerandaContainer