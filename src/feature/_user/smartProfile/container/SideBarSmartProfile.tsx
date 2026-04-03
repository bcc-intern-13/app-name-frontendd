"use client"

import { LogOutIcon } from "lucide-react"
import Link from "next/link"
import { useAuth } from "../../auth/hooks/useAuth";
import { Button } from "@/components/ui/atoms/button";


const SideBarSmartProfile = () => {
    const { logout } = useAuth();
    return (
        <aside className="w-100 h-460 absolute top-0 left-0 bg-white py-40 px-8 space-y-4">
            <div className="space-y-2 flex flex-col items-center">
                <div className='w-20 h-20 rounded-full  bg-[#D9D9D9]'>
                    .
                </div>
                <p className="h3-semibold">
                    Rizky Maulana
                </p>
                <p className="body-regular">
                    UI/UX Designer - Jakarta
                </p>

            </div>

            <Link href="/career-mapping">
                <button className="w-full rounded-xl bg-bl-01 px-3 py-2 text-secondary hover:bg-bl-01/80">
                    <p className="title-semibold">
                      Ulangi Career Mapping  
                    </p>
                    <p className="caption-regular">
                        Perbarui hasil kariermu
                    </p>
                </button>
            </Link>
            <Button
                onClick={logout}
                variant="back"
                size="lg"
                className="w-full py-4 px-2 mt-4 rounded-b-lg hover:bg-gray-100 flex items-center gap-2 text-[#000000] text-base font-medium transition-transform duration-300"
            >
                <span>Logout</span>
            </Button>
        </aside>
    )
}

export default SideBarSmartProfile