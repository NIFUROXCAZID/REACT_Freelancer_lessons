import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const db = new DbOperations('news')

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['News'],
  endpoints: (builder) => ({
    getAllNews: builder.query({
      async queryFn() {
        try {
          const news = await db.getAll()
          return { data: news }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "News", id })),
              { type: "News", id: "LIST" },
            ]
          : [{ type: "News", id: "LIST" }],
    }),
    addNews: builder.mutation({
      async queryFn(data) {
        try {
          await db.add({
            ...data,
            createdAt: new Date().toISOString(),
          })

          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: [{ type: "News", id: "LIST" }],
    }),
    updateNews: builder.mutation({
      async queryFn({ id, ...data }) {
        try {
          await db.update(id, data)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: [{ type: "News", id: "LIST" }],
    }),
    deleteNews: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: [{ type: "News", id: "LIST" }],
    }),
  }),
})

export const {
  useGetAllNewsQuery,
  useAddNewsMutation,
  useUpdateNewsMutation,
  useDeleteNewsMutation,
} = newsApi