import AppointmentForm from '@/pages/appointments/AppointmentForm'
import AppointmentsList from '@/pages/appointments/AppointmentsList'
import DoctorsForm from '@/pages/doctors/DoctorsForm'
import DoctorsList from '@/pages/doctors/DoctorsList'
import DoctorDeatils from "@/pages/doctors/DoctorDeatils";
import Home from '@/pages/Home'
import MainLayout from '@/layouts/MainLayout'
import PageNotFound from '@/pages/PageNotFound'
import PatientsForm from '@/pages/patients/PatientsForm'
import PatientsList from '@/pages/patients/PatientsList'
import PatientDetails from "@/pages/patients/PatientDetails";

export const routes = [
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
        meta: { title: "Головна" },
      },
      // ------  Пацієнти
      {
        path: "patients",
        meta: { title: "Пацієнти" },
        children: [
          {
            index: true,
            Component: PatientsList,
          },
          {
            path: "new",
            Component: PatientsForm,
          },
          {
            path: ":id",
            Component: PatientsForm,
          },
          {
            path: ":id/details",
            Component: PatientDetails,
          },
        ],
      },
      // ------  Лікарі
      {
        path: "doctors",
        meta: { title: "Лікарі" },
        children: [
          {
            index: true,
            Component: DoctorsList,
          },
          {
            path: "new",
            Component: DoctorsForm,
          },
          {
            path: ":id",
            Component: DoctorsForm,
          },
          {
            path: ":id/details",
            Component: DoctorDeatils,
          },
        ],
      },
      // ------  Призначення
      {
        path: "appointments",
        meta: { title: "Призначення" },
        children: [
          {
            index: true,
            Component: AppointmentsList,
          },
          {
            path: "new",
            Component: AppointmentForm,
          },
          {
            path: ":id",
            Component: AppointmentForm,
          },
        ],
      },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
];
