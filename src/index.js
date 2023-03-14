import "./styles/globals.css";
import "./styles/swiper.styles.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages";
import DynamicPages from "./components/dynamic-routes/DynamicPages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product/:page",
    element: <DynamicPages />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
