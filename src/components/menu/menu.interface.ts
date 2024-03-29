import { ReactNode } from "react";

export default interface MenuProps {
  children?: ReactNode;
  anchorEl: null | HTMLElement;
  onClose: () => void;
  menuList: MenuItemInterface[];
}

export interface MenuItemInterface {
  id: string;
  text: string;
  icon: ReactNode;
  handleClick: () => void;
};