import { baseApi } from '@/shared/api/baseApi'
import { apiRoutes } from '@/shared/config/routes/apiRoutes'

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query({
      //   query: ({ page, limit }) => ({
      //     url: apiRoutes.users,
      //     params: { page, limit },
      //   }),
      query: () => ({
        url: apiRoutes.users,
      }),
      providesTags: ["User"],
    }),
    getUserById: build.query({
      query: (id) => `${apiRoutes.users}/${id}`,
      providesTags: ["User"],
    }),
    getProfile: build.query({
      query: () => apiRoutes.profile,
      providesTags: ["User"],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: apiRoutes.users,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
    updateUser: build.mutation({
      query: ({ id, data }) => ({
        url: `${apiRoutes.users}/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["User"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useGetProfileQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} = userApi;
