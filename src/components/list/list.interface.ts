import { ReactNode } from "react";

import ListInterface from "../../interfaces/list.interface";

export default interface ListComponentProps extends ListInterface {
  children?: ReactNode;
}
