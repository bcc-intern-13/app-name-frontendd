import { Button } from "@/components/ui/atoms/button";
import { Checkbox } from "@/components/ui/atoms/checkbox";
import { ArrowDown, Plus } from "lucide-react";
import { useState } from "react";

 

const FilterPekerjaan = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };



    return (
        <div className="bg-white p-4 rounded-3xl space-y-3 relative">
            <h3 className="h3-semibold">Filter Pekerjaan</h3>

            <button
            className="w-full bg-secondary border border-secondary text-white font-medium hover:bg-bl-06 rounded-lg hover:scale-100 text-xs md:text-sm whitespace-nowrap transition-all duration-300 ease-in-out hover:shadow-md cursor-pointer py-2"
            onClick={toggleDropdown}
            >
                <p className="w-full flex items-center justify-between px-4 text-base text-center font-medium">
                    Kota
                    <ArrowDown className=""/>
                </p>
            </button>

            {isDropdownOpen && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <div className="p-4 space-y-2">
                        <p className="text-sm font-medium hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Bekasi</p>
                        <p className="text-sm font-medium hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Jakarta</p>
                        <p className="text-sm font-medium hover:bg-gray-100 px-2 py-1 rounded cursor-pointer">Bandung</p>
                    </div>
                </div>
            )}

            <div className="p-3 space-y-4">
                <div className="space-y-2">
                    <h5 className="title-semibold">
                        Bidang Kerja
                    </h5>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Teknologi & IT
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Desain & Kreatif
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Administratif
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Keuangan
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Lainnya
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h5 className="title-semibold">
                        Tipe Pekerjaan
                    </h5>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Remote
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Hybrid
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Onsite
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h5 className="title-semibold">
                        Jenis Disabilitas
                    </h5>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Tunarungu
                        </span>
                    </div>
                    <div className="flex items-center gap-4 px-4 py-2">
                        <Checkbox/>
                        <span className="text-base font-medium">
                            Tunanetra
                        </span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h5 className="title-semibold">
                        Label Aksesibilitas
                    </h5>
                    <button className="w-full rounded-xl px-4 py-2 flex items-center gap-4 hover:bg-gray-100 transition cursor-pointer">
                        <Plus />
                        <span className="text-base font-medium">
                            Tambah Label
                        </span>
                    </button>
                </div>
            </div>

            <div className="w-full grid grid-cols-2 items-center gap-2">
                <Button variant={"back"} size={"lg"}>
                    Reset
                </Button>
                <Button variant={"lanjut"} size={"lg"}>
                    Tampilkan
                </Button>
            </div>
        </div>
    );
};

export default FilterPekerjaan;