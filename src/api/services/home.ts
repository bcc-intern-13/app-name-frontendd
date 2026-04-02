import { HomeResponse } from "@/shared/types/home"
import api from "../core/axios"


export const homeService = {
    getHome: async (): Promise<HomeResponse> => {
        const response = await api.get('/home/summary')
        return response.data
    }
}