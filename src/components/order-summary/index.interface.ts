import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface OrderSummaryInterface {
  children?: ReactNode;
  products: ProductInterface[];
  totalAmount: number;
}