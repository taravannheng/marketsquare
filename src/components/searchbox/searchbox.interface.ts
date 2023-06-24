import { ReactNode } from "react";

export default interface SearchBoxInterface {
  children?: ReactNode;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  setIsFocused: (isFocused: boolean) => void;
}