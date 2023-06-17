import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface SuggestionItemInterface {
  children?: ReactNode;
  suggestion: ProductInterface;
}