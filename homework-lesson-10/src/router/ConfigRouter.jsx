import { createBrowserRouter } from "react-router";

import MainLayout from "@/layouts/MainLayout";
import Home from "@/components/Home";
import BusPage from "@/components/pages/BusPage";
import HotelPage from "@/components/pages/HotelPage";
import ResultPage from "@/components/pages/ResultPage";
import PageError from "@/components/PageError";

// Отут роутс для іншого
export const routes = [
  {
    Component: MainLayout,
    errorElement: <PageError />,
    children: [
      {
        path: "/",
        Component: Home,
        handle: {
          title: "Home",
          description: "Моя головна сторінка",
          isInMainMenu: false,
        },
      },
      {
        path: "buspage",
        Component: BusPage,
        handle: {
          title: "BusPage",
          description: "Сторінка про BusPage",
          isInMainMenu: true,
        },
      },
      {
        path: "hotelpage",
        Component: HotelPage,
        handle: {
          title: "HotelPage",
          description: "Сторінка про HotelPage",
          isInMainMenu: true,
        },
      },
      {
        path: "resultpage",
        Component: ResultPage,
        handle: {
          title: "ResultPage",
          description: "Сторінка про ResultPage",
          isInMainMenu: true,
        },
      },
    ],
  },
];
// Експортуєм то і то
const router = createBrowserRouter(routes)
// Отут роутер для генерації меню
export default router