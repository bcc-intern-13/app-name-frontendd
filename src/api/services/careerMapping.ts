import api from "../core/axios"
import { CompleteCareerMappingData } from "@/lib/validations/careerMapping"

export const careerMappingService = {
    submitCareerMapping: async (data: CompleteCareerMappingData) => {
        const response = await api.post('/career-mapping/submit', data)
        return response.data
    },

    getCareerMappingResult: async () => {
        const response = await api.get('/career-mapping/result')
        return response.data
    }
}