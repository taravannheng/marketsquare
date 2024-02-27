import { ReactNode } from "react";

export default interface AvatarProps {
  children?: ReactNode;
  size?: "small" | "medium" | "large";
  src?: string;
  alt?: string;
  clickHandler?: () => void;
}