import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface ProductDetailsDisplayInterface {
  children?: ReactNode;
  product: ProductInterface;
}