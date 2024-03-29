import { ReactNode } from "react";

interface IconButtonProps {
  icon: ReactNode;
  onClick: (() => void) | ((e: any) => void);
  size?: "small" | "medium" | "large";
  isDestructive?: boolean;
  sx?: any;
}

export default IconButtonProps;