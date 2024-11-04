import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./componnets/Main/Main";
import Cards from "./componnets/Cards/Cards";
import ErrorBoundry from "./componnets/ErrorBoundry/ErrorBoundry";
import DataNotFound from "./componnets/ErrorBoundry/DataNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorBoundry />,
    children: [
      {
        path: "/",
        element: <Cards></Cards>,
        loader: () => fetch("./data.json"),
      },
      {
        path: "/noData",
        element: <DataNotFound></DataNotFound>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
