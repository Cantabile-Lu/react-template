import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { lazy } from "react";

const Dashboard = lazy(() => import("@/views/dashboard"));
const About = lazy(() => import("@/views/about"));
const Focus = lazy(() => import("@/views/focus"));

const Main = lazy(() => import("@/views/main"));
const Download = lazy(() => import("@/views/download"));
const Recommend = lazy(
  () => import("@/views/dashboard/children-views/recommend")
);
const Disc = lazy(() => import("@/views/dashboard/children-views/disc"));

const Ranking = lazy(() => import("@/views/dashboard/children-views/ranking"));

const Singer = lazy(() => import("@/views/dashboard/children-views/singer"));

const Songs = lazy(() => import("@/views/dashboard/children-views/songs"));
const Station = lazy(() => import("@/views/dashboard/children-views/station"));
const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to="/Dashboard" />
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/recommend",
        element: <Recommend />
      },
      {
        path: "/dashboard/disc",
        element: <Disc />
      },
      {
        path: "/dashboard/ranking",
        element: <Ranking />
      },
      {
        path: "/dashboard/singer",
        element: <Singer />
      },
      {
        path: "/dashboard/songs",
        element: <Songs />
      },
      {
        path: "/dashboard/station",
        element: <Station />
      }
    ]
  },
  {
    path: "/main",
    element: <Main />
  },
  {
    path: "/focus",
    element: <Focus />
  },
  {
    path: "/download",
    element: <Download />
  },
  {
    path: "/about",
    element: <About />
  }
];
export default routes;
