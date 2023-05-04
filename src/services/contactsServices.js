import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

     const postMessage =  (body) => {   
         return request(`${BASE_URL}/form-contacts`,"POST",body)   
     }



    return { error, loading, succes, postMessage }
}