import { ReactNode } from "react";

export default interface SearchBoxProps {
  children?: ReactNode;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
}