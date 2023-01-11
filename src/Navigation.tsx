import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transition from "./pages/Transition";
import { PageOne, PageTwo, NotFound } from "./PageLoader";
import { AppRoutes } from "./types/app";

const ROUTES: AppRoutes = [
  {
    path: "/",
    element: <PageOne />
  },
  {
    path: "/page-two",
    element: <PageTwo />
  }
];

const Navigation: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Transition />}>
      <Routes>
        {ROUTES.map(({ path, element, props }) => (
          <Route path={path} element={element} {...props} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Navigation;
