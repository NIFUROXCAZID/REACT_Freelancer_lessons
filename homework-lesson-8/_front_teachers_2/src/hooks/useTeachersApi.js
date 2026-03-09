import axios from 'axios'
import { useState, useEffect, useCallback } from 'react'
import apiRoutes from '../api/apiRoutes'

const useTeachersApi = ({ skip = false } = {}) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // Запит на отримання списку вчителів
    const fetchTeachers = useCallback(async () => {
        if (skip) return
        setIsLoading(true)
        setError(null)
        try {
            const res = await axios.get(apiRoutes.getAllTeachers)
            setData(res.data)
        } catch (error) {
            setError(error)
        } finally {
            setIsLoading(false)
        }
    }, [skip])

    const deleteTeacher = useCallback(async (id) => {
        if (skip) return
        try {
            await axios.delete(apiRoutes.deleteTeacher(id))

            setData((prev) => prev.filter((teacher) => teacher.id !== id))
        } catch (error) {
            setError(error)
        }
    }, [skip])

    return {
        data,
        isLoading,
        error,
        // Запит на отримання списку вчителів
        fetchTeachers,
        // Запит на видалення списку вчителів
        deleteTeacher,
    }
}

const useTeacher = ({ id, skip = false } = {}) => {
    const [teacher, setTeacher] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        if (skip || !id) return

        const fetchTeacher = async () => {
            setIsLoading(true)
            setError(null)
            try {
                const res = await axios.get(apiRoutes.getTeacherById(id))
                setTeacher(res.data)
            } catch (err) {
                setError(err)
            } finally {
                setIsLoading(false)
            }
        }

        fetchTeacher()
    }, [id, skip])

    return { teacher, isLoading, error }
}

export default useTeachersApi
export { useTeacher }

// import axios from "axios"
// import { useState } from "react"

// const useCrudApi = (routes) => {
//     const [data, setData] = useState([])
//     const [isLoading, setIsLoading] = useState(false)
//     const [error, setError] = useState(null)

//     const fetchAll = async () => {
//         setIsLoading(true)
//         try {
//             const res = await axios.get(routes.getAll)
//             setData(res.data)
//         } catch (err) {
//             setError(err)
//         } finally {
//             setIsLoading(false)
//         }
//     }

//     const create = async (item) => {
//         return axios.post(routes.create, item)
//     }

//     const update = async (id, item) => {
//         return axios.put(routes.update(id), item)
//     }

//     const remove = async (id) => {
//         return axios.delete(routes.delete(id))
//     }

//     const getOne = async (id) => {
//         const res = await axios.get(routes.getOne(id))
//         return res.data
//     }

//     return {
//         data,
//         isLoading,
//         error,
//         fetchAll,
//         create,
//         update,
//         remove,
//         getOne,
//     }
// }

// export default useCrudApi