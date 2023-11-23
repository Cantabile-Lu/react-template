import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/views/dashboard"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/Dashboard" />
  },
  {
    path: "/dashboard",
    element: <Dashboard/>
  }
];
export default routes;
