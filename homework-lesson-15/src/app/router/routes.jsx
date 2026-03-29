import Home from "@/pages/Home";
import MainLayout from "../layouts/MainLayout";
import { Component } from "react";
import DreamsDashboard from "@/pages/Dreams/DreamsDashboard";
import EditDreams from "@/pages/Dreams/EditDreams";
import About from "@/pages/About";


export const routes = [
  {
    Component: MainLayout,
    children: [
      {
        path: "/",
        Component: Home,
        meta: {
          title: "Home",
        },
      },
      {
        path: "/dream",
        meta: {
          title: "DreamBoard",
        },
        children: [
          {
            index: true,
            Component: DreamsDashboard,
          },
          {
            path: "new",
            Component: EditDreams,
          },
          {
            path: ":id/edit",
            Component: EditDreams,
          },
        ],
      },
      {
        path: "/about",
        Component: About,
        meta: {
          title: "About",
        },
      },
    ],
  },
];
