import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./componnets/Main/Main";
import Cards from "./componnets/Cards/Cards";
import ErrorBoundry from "./componnets/ErrorBoundry/ErrorBoundry";
import DataNotFound from "./componnets/ErrorBoundry/DataNotFound";
import ProductDetails from "./componnets/Header/ProductDetails";
import Header from "./componnets/Header/Header";
import Dashboard from "./componnets/Dashboard/Dashboard";
import Chart from "./componnets/Chart/Chart";
// import HederTitel from "./componnets/Header/HederTitel";
// import Header from "./componnets/Header/Header";

const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch("/data.json"),
    element: <Main></Main>,
    errorElement: <ErrorBoundry />,
    children: [
      {
        path: "/",
        element: <Cards></Cards>,
        loader: () => fetch("/data.json"),
      },
      {
        path: "/product/:product_id",
        loader: ({ params }) => fetch(`/data.json`),
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/chart",
        element: <Chart></Chart>,
      },
      {
        path: "/noData",
        element: <DataNotFound></DataNotFound>,
      },
    ],
  },
  {
    path: "/",
    element: <Header></Header>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer
      position="top-center"
      autoClose={1000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  </StrictMode>
);
