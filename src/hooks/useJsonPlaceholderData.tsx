import { useQuery } from "@tanstack/react-query"
import axios from "axios"


const fetchJsonData = ()=>{
    return axios.get('https://jsonplaceholder.typicode.com/todos/1')
}

export const useJsonPlaceholderData = ()=>{
    return useQuery({
        queryKey: ['json-data'],
        queryFn: fetchJsonData
    })
}