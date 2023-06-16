import { Dispatch, ReactNode, SetStateAction } from "react";

export default interface SortInterface {
  children?: ReactNode;
  sortMenuItem: number;
  setSortMenuItem: Dispatch<SetStateAction<number>>;
}