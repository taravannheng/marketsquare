import { ReactNode } from "react";

import { MenuInterface } from "../navigation-menu/index.interface";

interface NavigationMenuItemInterface extends MenuInterface {
  children?: ReactNode;
}

export default NavigationMenuItemInterface;