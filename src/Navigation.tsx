import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transition from "./pages/Transition";
import Routing, { NotFound } from "./Routing";

const Navigation: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Transition />}>
      <Routes>
        {Routing.map(({ path, element, props }) => (
          <Route path={path} element={element} {...props} key={path} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Navigation;
