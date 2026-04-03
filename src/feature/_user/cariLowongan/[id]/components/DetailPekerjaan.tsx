import { LocateIcon, LocationEdit, LocationEditIcon, MapPlus } from "lucide-react"
import Image from "next/image"


const DetailPekerjaan = () => {
    return (
        <div className="space-y-4">
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                    <Image
                        src="/LogoPerusahaan.webp"
                        alt="Logo Company"
                        width={100}
                        height={100}
                        className="w-10 h-10"
                    />
                    <h4 className="title-semibold">
                        Tokopedia
                    </h4>
                </div>
                <h3 className="h2-semibold">
                    UI/UX Designer
                </h3>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/LocationIcon.webp"
                            alt="Location"
                            width={100}
                            height={100}
                            className="w-5 h-7"
                        />
                        <p className="body-regular">
                            Jakarta Selatan
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/PeopleIcon.webp"
                            alt="Money"
                            width={100}
                            height={100}
                            className="w-7 h-7"
                        />
                        <p className="body-regular">
                            5.000 - 10.000 Karyawan
                        </p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/BrowserIcon.webp"
                            alt="Money"
                            width={100}
                            height={100}
                            className="w-7 h-7"
                        />
                        <p className="body-regular">
                            tokopedia.com
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-4">
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Deskripsi Pekerjaan 
                    </h6>
                    <p className="body-regular">
                        Sebagai UI/UX Designer di Tokopedia, Anda akan bertanggung jawab untuk merancang pengalaman pengguna yang intuitif dan menarik untuk platform e-commerce kami. Anda akan bekerja sama dengan tim produk, engineering, dan marketing untuk memahami kebutuhan pengguna dan menerjemahkannya menjadi solusi desain yang inovatif.
                    </p>
                </div>
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Informasi Pekerjaan 
                    </h6>
                    <p className="body-regular">
                        Sebagai UI/UX Designer di Tokopedia, Anda akan bertanggung jawab untuk merancang pengalaman pengguna yang intuitif dan menarik untuk platform e-commerce kami. Anda akan bekerja sama dengan tim produk, engineering, dan marketing untuk memahami kebutuhan pengguna dan menerjemahkannya menjadi solusi desain yang inovatif.
                    </p>
                </div>
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Kualifikasi Pekerjaan
                    </h6>
                    <p className="body-regular">
                        Sebagai UI/UX Designer di Tokopedia, Anda akan bertanggung jawab untuk merancang pengalaman pengguna yang intuitif dan menarik untuk platform e-commerce kami. Anda akan bekerja sama dengan tim produk, engineering, dan marketing untuk memahami kebutuhan pengguna dan menerjemahkannya menjadi solusi desain yang inovatif.
                    </p>
                </div>
                <div className="bg-white border border-[#757575] rounded-xl p-4 space-y-4">
                    <h6 className="title-bold">
                        Jenis Disabilitas yang tersedia
                    </h6>
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="bg-[#FFD4B0] text-[#FF6B00] px-4 py-2 rounded-full border border-[#FF6B00]">
                                Tunadaksa
                            </p>
                        </div>
                        <div>
                            <p className="bg-[#FFD4B0] text-[#FF6B00] px-4 py-2 rounded-full border border-[#FF6B00]">
                                Tunarungu
                            </p>
                        </div>
                        <div>
                            <p className="bg-[#FFD4B0] text-[#FF6B00] px-4 py-2 rounded-full border border-[#FF6B00]">
                                Akses fisik
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default DetailPekerjaan