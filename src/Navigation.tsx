import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Transition from "./pages/Transition";
import { Dashboard, About, NotFound } from "./PageLoader";

const Navigation: React.FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Transition />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default Navigation;
