import { ReactNode } from "react";

import ListItemInterface from "../../interfaces/list-item.interface";

export default interface ListItemComponentProps extends ListItemInterface {
  children?: ReactNode;
  key?: string;
};