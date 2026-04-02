import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  // baseUrl: 'http://localhost:4000/api/',
  // baseUrl: 'https://backend-17-3ths.onrender.com/api/',
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers, { getState, extra }) => {
    // Якщо skipAuth не вказано або false — додаємо токен
    if (!extra?.skipAuth) {
      const token = getState().auth?.accessToken
      if (token) headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  },
})

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQuery,
  tagTypes: ['User', 'Post', 'Comment'],
  endpoints: () => ({}),
})
