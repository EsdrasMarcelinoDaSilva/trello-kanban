import { useCallback } from "react"

export const useFetchData = () => {

    const fetchData = useCallback(async () => {

    const token = localStorage.getItem('token')
    
    const response = await fetch('https://arnia-kanban.vercel.app/api/card', { 
        headers:{
        'content-type':'application/json',
        'x-api-key':'52a8b954-e25d-4cc5-86e5-c32e92f994bb',       
        Authorization:  token || '',
    }})
    const data = await response.json()
    return data
    }, [])
    return {fetchData}
}

