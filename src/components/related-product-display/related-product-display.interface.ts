import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface RelatedProductDisplayProps {
  children?: ReactNode;
  products: ProductInterface[] | null;
}