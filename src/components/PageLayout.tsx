import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <div className="w-screen max-w-[100vw]">{children}</div>
);
