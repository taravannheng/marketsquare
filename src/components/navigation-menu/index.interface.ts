import { ReactNode } from "react";

interface NavigationMenuInterface {
  children?: ReactNode;
  menuList: MenuInterface[];
}

interface MenuInterface {
  title: string;
  imgUrl: string;
  categories: CategoryInterface[];
}

interface CategoryInterface {
  title: string;
  categoryListItem: CategoryListItemInterface[];
}

interface CategoryListItemInterface {
  text: string;
  url: string;
}

export default NavigationMenuInterface;
export type { MenuInterface, CategoryInterface, CategoryListItemInterface };