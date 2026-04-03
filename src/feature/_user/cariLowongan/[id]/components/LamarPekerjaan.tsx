import { Button } from "@/components/ui/atoms/button"
import Image from "next/image"


const LamarPekerjaan = () => {
    return (
        <div className="bg-white rounded-xl p-4 space-y-4">
            <Button variant="lanjut" size="lg" className="w-full">
                Lamar
            </Button>
            <div className="space-y-8">
                <div className="flex items-center gap-4">
                    <Image src={"/GajiLogo.webp"} alt="GajiLogo" width={500} height={500} className="w-7 h-7"/>
                    <p className="body-semibold">
                        Gaji: 8-14 Jt / Bulan
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Image src={"/KerjaLogo.webp"} alt="KerjaLogo" width={500} height={500} className="w-7 h-7"/>
                    <p className="body-semibold">
                        Tipe Pekerjaan: Full-Time
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Image src={"/KarirLogo.webp"} alt="KarirLogo" width={500} height={500} className="w-7 h-7"/>
                    <p className="body-semibold">
                        Jenjang Karir: Senior
                    </p>
                </div>
            </div>
            <Button variant="lanjut" size="lg" className="w-full">
                Simpan Lowongan
            </Button>
            <div className="space-y-2">
                <p className="title-semibold">
                    Fasilitas Aksesibilitas:
                </p>
                <div className="flex items-center gap-2">
                    <Image src={"/CeklisLogo.webp"} alt="AksesibilitasLogo" width={500} height={500} className="w-5 h-5"/>
                    <p className="body-regular">
                        Tersedia ramp dan lift
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src={"/CeklisLogo.webp"} alt="AksesibilitasLogo" width={500} height={500} className="w-5 h-5"/>
                    <p className="body-regular">
                        Interpreter bahasa isyarat
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Image src={"/CeklisLogo.webp"} alt="AksesibilitasLogo" width={500} height={500} className="w-5 h-5"/>
                    <p className="body-regular">
                        Mendukung screen reader
                    </p>
                </div>
            </div>
            <div className="space-y-3">
                <p className="title-bold">
                    Cocok untuk:
                </p>
                <div>
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="bg-[#FFD4B0] text-[#FF6B00] px-3 py-1 rounded-full border border-[#FF6B00]">
                                Tunadaksa
                            </p>
                        </div>
                        <div>
                            <p className="bg-[#FFD4B0] text-[#FF6B00] px-3 py-1 rounded-full border border-[#FF6B00]">
                                Tunarungu
                            </p>
                        </div>
                        <div>
                            <p className="bg-[#FFD4B0] text-[#FF6B00] px-3 py-1 rounded-full border border-[#FF6B00]">
                                Akses fisik
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    )
}

export default LamarPekerjaan