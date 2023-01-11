import { lazy } from "react";
import { AppRoutes } from "./types/app";

const PageOne = lazy(() => import("./pages/PageOne"));
const PageTwo = lazy(() => import("./pages/PageTwo"));

const Routing: AppRoutes = [
  {
    path: "/",
    element: <PageOne />
  },
  {
    path: "/page-two",
    element: <PageTwo />
  }
];

export const NotFound = lazy(() => import("./pages/NotFound"));
export default Routing;
