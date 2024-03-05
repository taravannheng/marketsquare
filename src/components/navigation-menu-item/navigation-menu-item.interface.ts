import { ReactNode } from "react";

import { MenuInterface } from "../navigation-menu/navigation-menu.interface";

interface NavigationMenuItemProps extends MenuInterface {
  children?: ReactNode;
}

export default NavigationMenuItemProps;