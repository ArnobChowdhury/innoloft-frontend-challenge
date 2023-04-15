import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./routes/main";
import Product from "./routes/product";
import ProductEdit from "./routes/productEdit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";

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
        element: <ProductEdit />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
