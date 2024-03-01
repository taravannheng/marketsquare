import { ReactNode } from "react";

import { MenuInterface } from "../navigation-menu/index.interface";

interface NavigationMenuItemProps extends MenuInterface {
  children?: ReactNode;
}

export default NavigationMenuItemProps;