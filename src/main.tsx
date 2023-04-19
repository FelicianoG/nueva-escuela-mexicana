import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import CamposFormativos from "./pages/campos-formativos";
import EjesArticuladores from "./pages/ejes-articuladores";
import EjesTransversales from "./pages/ejes-transversales";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: "example/",
        element: <h1>example page</h1>,
      },
    ],
  },
  {
    path: "/campos-formativos",
    element: <CamposFormativos />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: ":campo",
        element: <h1>example page</h1>,
      },
    ],
  },
  {
    path: "/ejes-articuladores",
    element: <EjesArticuladores />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: ":eje",
        element: <h1>example page</h1>,
      },
    ],
  },
  {
    path: "/ejes-transversales",
    element: <EjesTransversales />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        path: ":eje",
        element: <h1>example page</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
