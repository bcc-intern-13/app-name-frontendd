'use client'

import React, { useEffect } from 'react'
import { useHomeStore } from '@/lib/stores/home'

const HeaderBeranda = () => {
    const { home, isLoading, error, loadHome } = useHomeStore()

    useEffect(() => {
        loadHome()
    }, [loadHome])

    if(isLoading) return <div>Loading...</div>
    if(error) return <div>Error: {error}</div>
  return (
    <div className='flex flex-col gap-8'>
        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4'>
            <div>
                <div className='flex'>
                    <h3 className='h3-bold text-2xl md:text-[32px]'>
                        Selamat Datang, 
                    </h3>
                    <p className='h3-bold text-2xl md:text-[32px]'>
                        
                    </p>
                </div>
                <p className='caption-regular mt-1 md:mt-0'>
                    Ada 24 lowongan baru yang cocok untuk profilmu hari ini.
                </p>
            </div>
            <div className='bg-white px-4 py-2 flex items-center justify-center border-2 border-[#D9D9D9] rounded-full w-full md:w-auto mt-4 md:mt-0'>
                <p className='caption-regular'>
                    Selasa, 10 Maret 2026
                </p>
            </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8'>
            <div className='w-full md:w-67 h-11 bg-white rounded-xl border border-[#D9D9D9] flex items-center justify-center text-center'>
                <p className='text-base font-semibold'>
                    {/* Total Job */}
                    8 Total Lamaran
                </p>
            </div>
            <div className='w-full md:w-67 h-11 bg-white  rounded-xl border border-[#D9D9D9] flex items-center justify-center text-center'>
                <p className='text-base font-semibold'>
                    {/* Total Dipanggil */}
                    1 Dipanggil Interview 
                </p>
            </div>
            <div className='w-full md:w-67 h-11 bg-white  rounded-xl border border-[#D9D9D9] flex items-center justify-center text-center'>
                <p className='text-base font-semibold'>
                    {/* Total Disimpan */}
                    12 Lowongan Disimpan
                </p>
            </div>
        </div>
    </div>
  )
}

export default HeaderBeranda