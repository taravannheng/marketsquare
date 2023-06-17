import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface SuggestionListInterface {
  children?: ReactNode;
  suggestions: ProductInterface[];
}