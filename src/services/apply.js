import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

     const postApply =  (body) => {   
         return request(`${BASE_URL}/apply`,"POST",body)   
     }



    return { error, loading, succes, postApply }
}