import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Transition from "./pages/Transition";
import Routing from "./Routing";

const Navigation: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Transition />}>
      <Routes>
        {Routing.map(({ path, element, props }) => (
          <Route path={path} element={element} {...props} key={path} />
        ))}

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Navigation;
