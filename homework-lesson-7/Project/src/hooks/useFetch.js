import { useEffect, useState } from 'react'
// Це універсальний хук для запитів даних з сервера
export default function useFetch(url, { skip = false } = {}) {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        if (skip) return

        async function fetchData() {
            // console.log("FETCH URL:", url)
            try {
                setIsLoading(true)
                setError(null)
                const res = await fetch(url)
                const data = await res.json()
                setData(data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [url, skip])
    
    return {data, isLoading, error,}
}

// Як це використовується
// const { data, isLoading, error } = useFetch(apiRoutes.productsList)
// Все. Більше нічого писати не треба.
// Інакше цей useFetch всюду писать би довелось