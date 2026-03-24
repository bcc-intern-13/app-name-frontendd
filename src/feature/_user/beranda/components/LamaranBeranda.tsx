"use client"
import Link from "next/link"
import { lamaranData } from "../data/lamaranData"
import { statusStyle } from "../data/lamaranData"
import { StatusButton } from "@/components/ui/molecules/statusButton"


export default function LamaranBeranda() {
  return (
    <div className="bg-[#F4F6F8] border border-[#D9D9D9] rounded-2xl p-4 w-full space-y-2">
      
      <div className="flex justify-between items-center">
        <h3 className="title-bold ">
          Lamaran Saya
        </h3>

        <Link 
          href="/lamaran"
          className="text-secondary text-sm flex items-center gap-2 hover:text-bl-08"
        >
          Semua →
        </Link>
      </div>

      <div className="flex items-center gap-2 ">
        <StatusButton variant={"diproses"} size={"default"}>
          3 Diproses
        </StatusButton>
        <StatusButton variant={"dipanggil"} size={"default"}>
          1 Dipanggil
        </StatusButton>
        <StatusButton variant={"ditolak"} size={"default"}>
          2 Ditolak
        </StatusButton>
        
      </div>

      <div className="flex flex-col gap-2 ">
        {lamaranData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between hover:bg-gray-200 rounded-xl"
          >
            <div className="flex items-center gap-3 py-2 cursor-pointer">
              
              {/* Logo Perusahaan */}
              <div className="w-10 h-10 rounded-lg bg-green-200" />

              <div>
                <p className="font-semibold text-sm">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500">
                  {item.company}
                </p>
              </div>
            </div>

            <span
              className={`text-xs px-3 py-1 rounded-full ${statusStyle[item.status]}`}
            >
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}