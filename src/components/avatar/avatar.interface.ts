import { ReactNode } from "react";

export default interface AvatarInterface {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  src?: string;
  alt?: string;
  onClick?: () => void;
}