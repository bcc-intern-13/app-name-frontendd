"use client"

import { ArrowDownIcon, ChevronDown, Home, Hotel, Hourglass, HouseHeart, HousePlug, HousePlus, HouseWifi, LucideHome } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import SearchBar from './SearchBar'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLogin = () => {
    const pathname = usePathname();


  return (
    <nav className={'bg-white fixed right-0 left-0 top-0 z-10 transition-all duration-300 shadow-md shadow-[#007BFF40]'}>
        <div className='mycontainer py-4 flex items-center justify-between'>
            <div className='flex items-center justify-center gap-4'>
                <div className='w-40 h-14'>
                    <Image src={"/Logo.webp"} alt='LogoNav' width={500} height={500}/>
                </div>
            </div>

            <div>
                <ul className='flex items-center justify-between gap-2'>
                    <li className=''>
                        <Link 
                        href={"/beranda"} 
                        className={`py-4 px-2 hover:bg-gray-100 hover:shadow-lg hover:border-b-2 hover:border-b-[#252525] flex items-center gap-2 text-[#000000] text-base font-medium transition-transform duration-300  ${pathname === "/beranda" ? "border-b-2 border-b-[#252525] font-semibold" : "text-[#000000]"}`}
                        >
                            <Image src={"/HomeIcon.svg"} alt='HomeIcon' width={500} height={500} className='w-5 h-5'/>
                            Beranda
                        </Link>
                    </li>
                    <li className=''>
                        <Link 
                        href={"/cariLowongan"} 
                        className={`py-4 px-2 hover:bg-gray-100 hover:shadow-lg hover:border-b-2 hover:border-b-[#252525] flex items-center gap-2 text-[#000000] text-base font-medium transition-transform duration-300   ${pathname === "/cariLowongan" ? "border-b-2 border-b-[#252525] font-semibold" : "text-[#000000]"}`}
                        >
                            <Image src={"/SearchIcon.svg"} alt='HomeIcon' width={500} height={500} className='w-5 h-5'/>
                            Cari Lowongan
                        </Link>
                    </li>
                    <li className=''>
                        <Link 
                        href={"/lamaran"} 
                        className={`py-4 px-2 hover:bg-gray-100 hover:shadow-lg hover:border-b-2 hover:border-b-[#252525] flex items-center gap-2 text-[#000000] text-base font-medium transition-transform duration-300   ${pathname === "/lamaran" ? "border-b-2 border-b-[#252525] font-semibold" : "text-[#000000]"}`}
                        >
                            <Image src={"/LamaranIcon.svg"} alt='HomeIcon' width={500} height={500} className='w-5 h-5'/>
                            Lamaran
                        </Link>
                    </li>
                    
                </ul>
            </div>

            <div className='flex items-center justify-between gap-2 py-1 px-2 border border-[#D9D9D9] rounded-full cursor-pointer hover:bg-gray-200'>
                <div className='w-11 h-11 rounded-full  bg-[#D9D9D9]'>
                    .
                </div>
                <div className='pr-8'>
                    <h4 className='text-secondary font-semibold text-base'>
                        SMART PROFILE
                    </h4>
                    <p className='font-semibold text-base'>
                        Username
                    </p>
                </div>
                <div>
                    <ChevronDown/>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavLogin