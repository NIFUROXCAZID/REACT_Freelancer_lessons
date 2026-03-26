import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:3000",
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  tagTypes: ["Patient", "Patients", "Doctor", "Doctors", "Appointment", "Appointments"],
  endpoints: () => ({}),
});
