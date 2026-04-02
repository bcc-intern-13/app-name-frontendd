export interface HomeData {
    data: {
        greeting: {
            name: string
            timestamp: string
            avatar_url: string
        }
        job_recommendation: null
        career_mapping: null
    }
}

export interface HomeResponse {
    data: HomeData[]
    success: boolean
    message: string
}