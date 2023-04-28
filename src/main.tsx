import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Main from "./routes/Main";
import Product from "./routes/Product";
import ProductEdit from "./routes/ProductEdit";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import { appConfigSuccessful } from "./store/slices/appConfig";
import { Provider } from "react-redux";
import axios from "axios";

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

const APP_ID = import.meta.env.VITE_APP_ID || 1;
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

axios.post(`https://api-test.innoloft.com/configuration/${APP_ID}/`).then((res) => {
  store.dispatch(appConfigSuccessful(res.data));
  document.documentElement.style.setProperty("--color-primary", res.data.mainColor);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>,
  );
});
