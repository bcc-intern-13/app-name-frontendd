"use client"

import { Button } from "@/components/ui/atoms/button"
import SearchBar from "@/shared/components/SearchBar"
import { useSearchBar } from "@/shared/hooks/useSearchBar"
import { SearchIcon } from "lucide-react"
import BannerCariLowongan from "../components/BannerCariLowongan"
import FilterPekerjaan from "../components/FilterPekerjaan"
import HasilPencarian from "../components/HasilPencarian"



const CariLowonganContainer = () => {
    const { showResults, setShowResults } = useSearchBar()

    const onSearch = () => {
        setShowResults(true)
    }

  return (
    <section className="relative w-full mx-auto md:max-w-6xl">
        <div className="w-full min-h-screen py-34 px-4 space-y-4">
                <div className="w-full flex gap-4">
                    <SearchBar/>
                    <div className="">
                        <Button onClick={onSearch} variant="search" size="base">
                            <SearchIcon/>
                            Cari
                        </Button>
                    </div>
                </div>

                <div className="w-full hidden md:block">
                    <BannerCariLowongan/>
                </div>

                <div className="w-full block md:flex justify-between gap-4">
                    <div className="w-full md:w-[35%]">
                        <FilterPekerjaan/>
                    </div>
                    <div className="w-full md:w-[65%]">
                        <HasilPencarian/>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default CariLowonganContainer