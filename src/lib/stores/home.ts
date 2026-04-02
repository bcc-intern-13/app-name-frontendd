import { homeService } from "@/api/services/home"
import { HomeData } from "@/shared/types/home"
import { create } from "zustand"


interface HomeStore {
    home: HomeData[]
    isLoading: boolean
    error: string | null
    loadHome: () => Promise<void>
}

export const useHomeStore = create<HomeStore>((set) => ({
    home: [],
    isLoading: false,
    error: null,

    loadHome: async () => {
        set({ isLoading: true, error: null })
        try{
            const response = await homeService.getHome()
            set({
                home: response.data,
                isLoading: false,
            })
        }catch(error: any){
            set({
                error: error.message || "Gagal memuat data home",
                isLoading: false,
            })
        }
    }
}))