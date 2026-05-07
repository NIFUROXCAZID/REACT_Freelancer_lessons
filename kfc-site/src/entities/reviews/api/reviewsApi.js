import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const db = new DbOperations('reviews')

export const reviewsApi = createApi({
  reducerPath: 'reviewsApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Reviews'],
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      async queryFn() {
        try {
          const reviews = await db.getAll()
          return { data: reviews }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Reviews", id })),
              { type: "Reviews", id: "LIST" },
            ]
          : [{ type: "Reviews", id: "LIST" }],
    }),
    addReviews: builder.mutation({
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
      invalidatesTags: [{ type: "Reviews", id: "LIST" }],
    }),
    updateReviews: builder.mutation({
      async queryFn({ id, ...data }) {
        try {
          await db.update(id, data)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: [{ type: "Reviews", id: "LIST" }],
    }),
    deleteReviews: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: [{ type: "Reviews", id: "LIST" }],
    }),
  }),
})

export const {
  useGetAllReviewsQuery,
  useAddReviewsMutation,
  useUpdateReviewsMutation,
  useDeleteReviewsMutation,
} = reviewsApi