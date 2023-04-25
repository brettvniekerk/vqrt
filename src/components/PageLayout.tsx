import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="w-screen h-screen min-h-screen bg-white">{children}</div>
);
