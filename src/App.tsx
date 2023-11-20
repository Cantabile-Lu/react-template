import { Link, useRoutes } from "react-router-dom";
import routes from "@/router";
import { Button, ConfigProvider } from "antd";
import { Suspense } from "react";

import { appShallowEqual, useAppDispatch, useAppSelector } from "@/store";
import { changeCount } from "@/store/modules/counter.ts";

function App() {
  const { count } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message
    }),
    appShallowEqual
  );
  const dispatch = useAppDispatch();
  const handler = () => {
    dispatch(changeCount());
  };
  return (
    <>
      <div className={"app-main"}>
        <Link to={"/dashboard"}>发现音乐</Link>
        <Link to={"/main"}>我的音乐</Link>
        <Link to={"/focus"}>关注</Link>
        <Link to={"/download"}>下载客户端</Link>
        <Button onClick={handler}>按钮</Button>
        <h2>{count}</h2>
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
