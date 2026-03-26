import { api } from "..";

export const doctorApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => "/admin/doctors",
      providesTags: ["Doctors"],
    }),
    getDoctorById: builder.query({
      query: (id) => `/admin/doctors/${id}`,
      providesTags: (result, error, id) => [{ type: "Doctor", id }],
    }),
    createDoctor: builder.mutation({
      query: (data) => ({
        url: "/admin/doctors",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Doctors"],
    }),
    deleteDoctor: builder.mutation({
      query: (id) => ({
        url: `/admin/doctors/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Doctor", id }, "Doctors", "Appointments"],
    }),
    updateDoctor: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/admin/doctors/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Doctor", id }, "Doctors", "Appointments"],
    }),
    // | Метод  | Роут                 | Опис                    |
    // | ------ | -------------------- | ----------------------- |
    // | GET    | `/admin/doctors`     | Отримати список лікарів |
    // | GET    | `/admin/doctors:id`  | Отримати лікаря за id   |
    // | POST   | `/admin/doctors`     | Додати нового лікаря    |
    // | PUT    | `/admin/doctors/:id` | Оновити лікаря          |
    // | DELETE | `/admin/doctors/:id` | Видалити лікаря         |
  }),
});

export const {
  useGetDoctorsQuery,
  useGetDoctorByIdQuery,
  useCreateDoctorMutation,
  useDeleteDoctorMutation,
  useUpdateDoctorMutation,
} = doctorApi;
