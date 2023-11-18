import { Link, useRoutes } from "react-router-dom";
import routes from "@/router";
import { ConfigProvider } from "antd";
import { Suspense } from "react";

function App() {
  return (
    <>
      <div className={"app-main"}>
        <Link to={"/dashboard"}>发现音乐</Link>
        <Link to={"/main"}>我的音乐</Link>
        <Link to={"/focus"}>关注</Link>
        <Link to={"/download"}>下载客户端</Link>
        <ConfigProvider>
          <Suspense fallback={<div>...loading</div>}>
            {useRoutes(routes)}
          </Suspense>
        </ConfigProvider>
      </div>
    </>
  );
}

export default App;
