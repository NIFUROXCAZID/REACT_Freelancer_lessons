import { createApi } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'
const db = new DbOperations('contacts')

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: async () => ({ data: {} }), // 🔥 заглушка, бо ти юзаєш Firebase
  tagTypes: ["Contact"],
  endpoints: (builder) => ({
    sendContactMessage: builder.mutation({
      async queryFn(data) {
        try {
          await db.sendContactMessage(data)
          return { data: true }
        } catch (error) {
          return {
            error: {
              message: error.message,
            },
          }
        }
      },
    }),
    // 📥 Отримати всі повідомлення (для адмінки)
    getAllMessages: builder.query({
      async queryFn() {
        try {
          const data = await db.getAllMessages()
          return { data }
        } catch (error) {
          return {
            error: {
              message: error.message,
            },
          }
        }
      },
      providesTags: ["Contact"],
    }),
  }),
})

export const {
  useSendContactMessageMutation,
  useGetAllMessagesQuery,
} = contactsApi