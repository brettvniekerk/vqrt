import React from "react";

type Props = {
  children: React.ReactNode;
};

export const PageLayout: React.FC<Props> = ({ children }) => (
  <main className="w-screen h-screen min-h-screen bg-white">{children}</main>
);
