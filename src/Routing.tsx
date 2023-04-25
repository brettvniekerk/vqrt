import { lazy } from "react";
import { AppRoutes } from "./types/app";
import PageOne from "./pages/PageOne";

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

export default Routing;
