import {  useRoutes } from "react-router-dom";
import routes from "@/router";
import { ConfigProvider } from "antd";
import { Suspense } from "react";
function App() {
  return (
    <>
        <ConfigProvider>
          <Suspense fallback={<div>...loading</div>}>
            {useRoutes(routes)}
          </Suspense>
        </ConfigProvider>
    </>
  );
}

export default App;
