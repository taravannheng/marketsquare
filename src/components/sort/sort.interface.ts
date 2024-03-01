import { Dispatch, ReactNode, SetStateAction } from "react";

export default interface SortProps {
  children?: ReactNode;
  sortMenuItem: number;
  setSortMenuItem: Dispatch<SetStateAction<number>>;
}