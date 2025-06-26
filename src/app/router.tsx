import { createBrowserRouter, Navigate } from "react-router-dom";
import { RequestsList } from "../pages/RequestsList";
import { CreateRequest } from "../pages/CreateRequest";
import { RequestDetail } from "../pages/RequestsDetail";
import { Layout } from "./layout";
import { NotFound } from "./notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/requests" replace />,
  },
  {
    path: "/requests",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <RequestsList />,
      },
      {
        path: "new",
        element: <CreateRequest />,
      },
      {
        path: ":id",
        element: <RequestDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
