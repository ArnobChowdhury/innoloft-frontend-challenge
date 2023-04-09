import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./routes/main";
import Product from "./routes/product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "product/edit",
        element: <div>Product edit page</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
