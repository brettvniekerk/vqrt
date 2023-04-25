import React from "react";
import { ClipLoader } from "react-spinners";

type Props = {
  color?: string;
  size?: number;
};

export const Loader: React.FC<Props> = ({ color = "black", size = 40 }) => (
  <ClipLoader color={color} size={size} />
);
