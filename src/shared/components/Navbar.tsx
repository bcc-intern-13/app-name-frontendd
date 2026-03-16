"use client"

import { Button } from '@/components/ui/button'
import { ArrowBigRight, ArrowRight, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className={'fixed right-0 left-0 top-0 z-100 transition-transform duration-300 shadow-md shadow-[#007BFF40]'}>
      <div className='px-20 py-6 flex items-center justify-between'>
        <div className='w-40 h-11'>
          <Image src={"/Logo.webp"} alt='LogoNav' width={500} height={500}/>
        </div>
        
        <div>
            <ul className='flex items-center justify-between gap-6 text-lg '>
                <li>
                    <Link href={"/mengapa"} className='caption-regular'>Mengapa Workable</Link>
                </li>
                <li>
                    <Link href={"/caraKerja"} className='caption-regular'>Cara Kerja</Link>
                </li>
                <li>
                    <Link href={"/mitra"} className='caption-regular'>Mitra</Link>
                </li>
            </ul>
        </div>

        <div className='flex gap-2'>
          <Button variant={"back"} size={"default"}>Masuk</Button>
          <Button variant={"nav"} size={"default"} className='gap-2'>
            Daftar Gratis 
            <ArrowRight/>
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar