import { BASE_URL } from "../constants"
import { useHttp } from "../hooks/http.hook"

export const useAppServices = () => {


    const { request, error, loading, succes } = useHttp()

    const getArticle = (id) => {
        return request(`${BASE_URL}/articles/${id}`)
    }
    const getArticleSearch = (name) => {
        return request(`${BASE_URL}/articles?q=${name}`)
    }

    return { error, loading, succes, getArticle,getArticleSearch }
}