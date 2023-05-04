import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getJobsFromCompare = () => {
        return request(`${BASE_URL}/jobs`)
    }
    const getJob = (id) => {
        return request(`${BASE_URL}/jobs/${id}`)
    }

    return { error, loading, succes, getJob,getJobsFromCompare }
}