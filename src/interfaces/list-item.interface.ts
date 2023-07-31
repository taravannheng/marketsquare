import { ReactNode } from "react";

export default interface ListItemInterface {
  id?: string;
  text: string;
  icon?: ReactNode;
  href?: string;
  onClick?: () => void;
};