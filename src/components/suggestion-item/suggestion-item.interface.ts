import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface SuggestionItemProps {
  children?: ReactNode;
  suggestion: ProductInterface;
}