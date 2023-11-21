import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@/styles/index.less";

import { Provider } from "react-redux";
import store from "@/store";
import { server } from "@/utils";
server.request({
  url: "https://httpbin.org/get",
  method: "get",
  transform: {
    responseInterceptor: (config) => {
      console.log(`🚀🚀🚀🚀🚀-> in main.tsx on 15`);
      return config;
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
