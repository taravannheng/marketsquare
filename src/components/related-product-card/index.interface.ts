import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface RelatedProductCardProps {
  children?: ReactNode;
  product: ProductInterface;
  width?: string;
  height?: string;
  backgroundColor?: string;
}