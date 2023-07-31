import { ReactNode } from "react";

import ListInterface from "../../interfaces/list.interface";

export default interface ListComponentInterface extends ListInterface {
  children?: ReactNode;
}
