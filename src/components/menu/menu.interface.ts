import { ReactNode } from "react";

export default interface MenuInterface {
  children?: ReactNode;
  anchorEl: null | HTMLElement;
  handleClose: () => void;
  menuList: MenuItemInterface[];
}

export interface MenuItemInterface {
  id: string;
  text: string;
  icon: ReactNode;
  clickHandler: () => void;
};