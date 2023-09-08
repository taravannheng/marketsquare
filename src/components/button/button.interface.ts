import { ReactNode } from "react";

export default interface ButtonProps {
  children: ReactNode;
  actionType?: "button" | "submit";
  styleType?: "primary" | "secondary" | "tertiary";
  isLoading?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  width?: "full" | "auto";
  clickHandler?: (() => void) | ((event: any) => Promise<void>);
  href?: string;
  underlineLabel?: boolean;
  rounded?: boolean;
}