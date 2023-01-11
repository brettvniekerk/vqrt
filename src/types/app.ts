import { ReactNode } from "react";
import { RouteProps } from "react-router-dom";

export type AppRoute = {
  path: `/${string}`;
  element: ReactNode;
  props?: RouteProps;
};
export type AppRoutes = AppRoute[];
