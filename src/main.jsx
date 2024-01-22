import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import InfoStep from "./Component/InfoStep/InfoStep";
import Home from "./Pages/Home/Home";
import SelectPlan from "./Component/SelectPlan/SelectPlan";
import "./style.module.scss";
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import Page from "./Store/Page";
import Slice from "./Store/Slice";

const store = configureStore({
  reducer:{
    page:Page,
    slice:Slice
  }
})

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider  router={router} />
    </Provider>
  </React.StrictMode>
);
