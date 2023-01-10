import React from "react";
import { ClipLoader } from "react-spinners";
import { PageLayout } from "../components";

const Transition: React.FC = () => (
  <PageLayout>
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center">
      <ClipLoader />
    </div>
  </PageLayout>
);

export default Transition;
