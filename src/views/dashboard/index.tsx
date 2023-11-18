import { Link, Outlet } from "react-router-dom";
import { Suspense } from "react";

const App = () => {
  return (
    <div>
      <div>
        <Link to={"/dashboard/recommend"}>推荐</Link>
        <Link to={"/dashboard/ranking"}>排行耪</Link>
        <Link to={"/dashboard/songs"}>歌单</Link>
        <Link to={"/dashboard/station"}>主播电台</Link>
        <Link to={"/dashboard/singer"}>歌手</Link>
        <Link to={"/dashboard/disc"}>新碟商家</Link>
      </div>
      {/* 覆盖第一层的Suspense的默认效果 */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};
export default App;
