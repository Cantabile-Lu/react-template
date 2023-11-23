import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import "@/styles/index.less";

import { Provider } from "react-redux";
import store from "@/store";
import { server } from "@/utils";

interface Images {
  startdate: string;
  fullstartdate: string;
  url: string;
}
server
  .get<Images[]>({
    url: "https://raw.onmicrosoft.cn/Bing-Wallpaper-Action/main/data/zh-CN_all.json"
  })
  .then((res) => {
    console.log(`🚀🚀🚀🚀🚀-> in main.tsx on 15`, res.data);
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
