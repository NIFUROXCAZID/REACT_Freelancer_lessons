import { api } from '..'

export const patientApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => "/patients",
      providesTags: ["Patients"],
    }),
    getPatientById: builder.query({
      query: (id) => `/patients/${id}`,
      providesTags: (result, error, id) => [{ type: "Patient", id }],
    }),
    createPatients: builder.mutation({
      query: (data) => ({
        url: "/patients",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Patients"],
    }),
    deletePatient: builder.mutation({
      query: (id) => ({
        url: `/patients/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Patient", id }, "Patients", "Appointments"],
    }),
    updatePatient: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/patients/${id}`,
        method: "PUT",
        body: patch,
      }),
      invalidatesTags: (result, error, { id }) => [{ type: "Patient", id }, "Patients", "Appointments"],
    }),
    // | Метод  | Роут                  | Опис                    |
    // | ------ | --------------------- | ----------------------- |
    // | GET    | `/patients`           | Отримати всіх пацієнтів |
    // | GET    | `/patients/:id`       | Деталі пацієнта         |
    // | POST   | `/patients`           | Додати нового пацієнта  |
    // | PUT    | `/patients/:id`       | Оновити пацієнта        |
    // | DELETE | `/patients/:id`       | Видалити пацієнта       |
    // | GET    | `/patients?name=іван` | Фільтр за ПІБ           |

    // лікарі
  }),
});

export const {
  useGetPatientsQuery,
  useGetPatientByIdQuery,
  useCreatePatientsMutation,
  useDeletePatientMutation,
  useUpdatePatientMutation,
} = patientApi;
