import React from "react";
import { Loader, PageLayout } from "../components";

const Transition: React.FC = () => (
  <PageLayout>
    <div className="h-full w-full flex items-center justify-center">
      <Loader />
    </div>
  </PageLayout>
);

export default Transition;
