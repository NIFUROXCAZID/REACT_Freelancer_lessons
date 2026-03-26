import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    // baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["Patient", "Patients", "Doctor", "Doctors", "Appointment", "Appointments"],
  endpoints: (builder) => ({
    // пацієнти
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
      invalidatesTags: (result, error, id) => [{ type: "Patient", id }, "Patients"],
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

    getDoctors: builder.query({
      query: () => "/admin/doctors",
      providesTags: ["Doctors"],
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
      invalidatesTags: (result, error, id) => [{ type: "Doctor", id }, "Doctors"],
    }),

    // | Метод  | Роут                 | Опис                    |
    // | ------ | -------------------- | ----------------------- |
    // | GET    | `/admin/doctors`     | Отримати список лікарів |
    // | POST   | `/admin/doctors`     | Додати нового лікаря    |
    // | PUT    | `/admin/doctors/:id` | Оновити лікаря          |
    // | DELETE | `/admin/doctors/:id` | Видалити лікаря         |

    // призначення

    getAppointments: builder.query({
      query: () => "/appointments",
      providesTags: ["Appointments"],
    }),
    getAppointmentById: builder.query({
      query: (id) => `/appointments/${id}`,
      providesTags: (result, error, id) => [{ type: "Appointment", id }],
    }),
    createAppointment: builder.mutation({
      query: (data) => ({
        url: "/appointments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Appointments"],
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: `/appointments/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result, error, id) => [{ type: "Appointment", id }, "Appointments"],
    }),
    // | Метод  | Роут                             | Опис                   |
    // | ------ | -------------------------------- | ---------------------- |
    // | GET    | `/appointments`                  | Отримати всі записи    |
    // | GET    | `/appointments/:id`              | Один запис             |
    // | POST   | `/appointments`                  | Створити новий запис   |
    // | PUT    | `/appointments/:id`              | Оновити запис          |
    // | DELETE | `/appointments/:id`              | Видалити запис         |
    // | GET    | `/appointments?date=2025-08-01`  | Фільтр за датою        |
    // | GET    | `/appointments?patientName=іван` | Фільтр за ПІБ пацієнта |
  }),
});
