import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface SuggestionListProps {
  children?: ReactNode;
  suggestions: ProductInterface[];
  correctedSearchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  isLoading: boolean;
}