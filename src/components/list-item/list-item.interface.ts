import { ReactNode } from "react";

import ListItemInterface from "../../interfaces/list-item.interface";

export default interface ListItemComponentInterface extends ListItemInterface {
  children?: ReactNode;
  key?: string;
};