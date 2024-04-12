import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface ProductDetailsDisplayProps {
  children?: ReactNode;
  product: ProductInterface;
}