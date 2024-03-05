import { ReactNode } from "react";

export default interface ProgressIndicatorProps {
  children?: ReactNode;
  size?: number;
  color?: "primary" | "secondary";
}