import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  clickHandler: () => void;
  size?: "small" | "medium" | "large";
}

export default IconButtonProps;