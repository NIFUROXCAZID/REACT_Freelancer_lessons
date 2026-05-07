import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import DbOperations from '../../../shared/api/DbOperations'

const db = new DbOperations('products')

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Product'],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      async queryFn(_, { getState }) {
        try {
          const userId = getState().auth.user?.id
          const products = await db.getAll()
          const merged = await Promise.all(
            products.map(async (p) => {
              const reaction = await db.getUserReaction(p.id, userId)
              const favorites = userId
                ? await db.getUserFavorites(userId)
                : []
              return {
                ...p,
                userReaction: reaction?.type || null,
                isFavorite: favorites.includes(p.id),
              }
            })
          )
          return { data: merged }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Product", id })),
              { type: "Product", id: "LIST" },
            ]
          : [{ type: "Product", id: "LIST" }],
    }),
    getProductById: builder.query({
      async queryFn(id) {
        try {
          const product = await db.getById(id)
          return { data: product }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      providesTags: ['Product'],
    }),
    addProduct: builder.mutation({
      async queryFn(product) {
        try {
          await db.add(product)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: ['Product'],
    }),
    updateProduct: builder.mutation({
      async queryFn({ id, data }) {
        try {
          await db.update(id, data)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: ['Product'],
    }),
    deleteProduct: builder.mutation({
      async queryFn(id) {
        try {
          await db.delete(id)
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: ['Product'],
    }),
    // Ох с реакціями не просто
    setReaction: builder.mutation({
      async queryFn({ productId, userId, type }) {
        try {
          await db.setReaction({
            productId,
            userId,
            type,
          })
          return { data: true }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
      invalidatesTags: (result, error, { productId }) => [
        { type: "Product", id: productId },
        { type: "Product", id: "LIST" },
      ],
      async onQueryStarted(
        { productId, type },
        { dispatch, queryFulfilled }
      ) {
        const patch = dispatch(
          productApi.util.updateQueryData(
            "getAllProducts",
            undefined,
            (draft) => {
              const product = draft.find((p) => p.id === productId)
              if (!product) return
              const prev = product.userReaction || null
              // 👉 CASE 1: повторний клік (toggle off)
              if (prev === type) {
                product.userReaction = null
                if (type === "like") {
                  product.likesCount = Math.max((product.likesCount || 0) - 1, 0)
                }
                if (type === "dislike") {
                  product.dislikesCount = Math.max((product.dislikesCount || 0) - 1, 0)
                }
                return
              }
              // 👉 CASE 2: switch (like <-> dislike)
              if (prev && prev !== type) {
                if (prev === "like") {
                  product.likesCount = Math.max((product.likesCount || 0) - 1, 0)
                } else {
                  product.dislikesCount = Math.max((product.dislikesCount || 0) - 1, 0)
                }
                if (type === "like") {
                  product.likesCount = (product.likesCount || 0) + 1
                } else {
                  product.dislikesCount = (product.dislikesCount || 0) + 1
                }
                product.userReaction = type
                return
              }
              // 👉 CASE 3: first reaction
              product.userReaction = type
              if (type === "like") {
                product.likesCount = (product.likesCount || 0) + 1
              }
              if (type === "dislike") {
                product.dislikesCount = (product.dislikesCount || 0) + 1
              }
            }
          )
        )
        try {
          await queryFulfilled
        } catch {
          patch.undo()
        }
      }
      
    }),
    getUserReaction: builder.query({
      async queryFn({ productId, userId }) {
        try {
          const data = await db.getUserReaction(productId, userId)
          return { data }
        } catch (error) {
          return { error: { message: error.message } }
        }
      },
    }),
    toggleFavorite: builder.mutation({
      async queryFn({ productId, userId }) {
        try {
          await db.toggleFavorite({ productId, userId })
          return { data: true }
        } catch (e) {
          return { error: e }
        }
      },
      async onQueryStarted({ productId }, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          productApi.util.updateQueryData(
            "getAllProducts",
            undefined,
            (draft) => {
              const product = draft.find((p) => p.id === productId)
              if (!product) return
              product.isFavorite = !product.isFavorite
            }
          )
        )
        try {
          await queryFulfilled
        } catch {
          patch.undo()
        }
      },
    })
    
  }),
})

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
  useSetReactionMutation,
  useGetUserReactionQuery,
  useToggleFavoriteMutation,
} = productApi
