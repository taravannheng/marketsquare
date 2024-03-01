import { ReactNode } from "react";

interface NavigationMenuProps {
  children?: ReactNode;
  menuList: MenuInterface[];
}

interface MenuInterface {
  id: string;
  title: string;
  imgUrl: string;
  categories: CategoryInterface[];
}

interface CategoryInterface {
  id: string;
  title: string;
  categoryListItem: CategoryListItemInterface[];
}

interface CategoryListItemInterface {
  id: string;
  text: string;
  url: string;
}

export default NavigationMenuProps;
export type { MenuInterface, CategoryInterface, CategoryListItemInterface };