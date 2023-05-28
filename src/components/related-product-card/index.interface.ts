import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface RelatedProductCardInterface {
  children?: ReactNode;
  product: ProductInterface;
  width?: string;
  height?: string;
  backgroundColor?: string;
}