import React from 'react'
import HeaderBeranda from '../components/HeaderBeranda'
import RekomendasiLamaran from '../components/RekomendasiLamaran'
import LamaranBeranda from '../components/LamaranBeranda'

const BerandaContainer = () => {
  return (
    <section className='relative mx-auto max-w-7xl'>
        <div className=' pt-34 flex gap-4 mx-20'>
            <div className='w-[65%] space-y-8 '>
                <HeaderBeranda/>
                <RekomendasiLamaran/>
            </div>

            <div className=''>
                <LamaranBeranda/>
            </div>
        </div>
    </section>
  )
}

export default BerandaContainer