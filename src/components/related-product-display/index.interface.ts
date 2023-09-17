import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface RelatedProductDisplayInterface {
  children?: ReactNode;
  products: ProductInterface[] | null;
}