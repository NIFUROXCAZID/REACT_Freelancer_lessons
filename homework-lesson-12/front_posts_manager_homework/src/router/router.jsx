import MainLayout from '@/layouts/MainLayout'
import About from '@/pages/About'
import Home from '@/pages/Home'
import PostsPage from '@/pages/PostsPage'
import SpentManager from "@/pages/SpentManager/SpentManager";
import { createBrowserRouter } from 'react-router'

export const routes = [
  {
    Component: MainLayout,
    children: [
      {
        path: "/task1",
        Component: SpentManager,
        meta: {
          title: "Задача 1",
        },
      },
      {
        path: "/",
        Component: Home,
        meta: {
          title: "Головна",
        },
      },
      {
        path: "/posts",
        Component: PostsPage,
        meta: {
          title: "Сторінка постів",
        },
      },
      {
        path: "/about",
        Component: About,
        meta: {
          title: "Про нас",
        },
      },
    ],
  },
];

export const router = createBrowserRouter(routes)
