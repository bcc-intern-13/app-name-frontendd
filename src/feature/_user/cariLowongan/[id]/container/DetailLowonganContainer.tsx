import Link from "next/link"
import DetailPekerjaan from "../components/DetailPekerjaan"
import LamarPekerjaan from "../components/LamarPekerjaan"
import { Button } from "@/components/ui/atoms/button"
import { ArrowLeft } from "lucide-react"


const DetailLowonganContainer = () => {
    return (
        <section className="relative w-full mx-auto md:max-w-6xl">
            <div className="w-full min-h-screen py-34 px-4 space-y-4">

                <Link href="/cari-lowongan">
                    <Button variant="black" size="default" className="border-[#757575] border">
                        <ArrowLeft/>
                        Kembali
                    </Button>
                </Link>

                <div className="flex mt-8 gap-8">
                    <div className="w-[65%]">
                        <DetailPekerjaan/>
                    </div>
                    <div className="w-[35%]">
                        <LamarPekerjaan/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailLowonganContainer