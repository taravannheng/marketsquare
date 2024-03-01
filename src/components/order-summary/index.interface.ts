import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

export default interface OrderSummaryProps {
  children?: ReactNode;
  products: ProductInterface[];
  totalAmount: number;
}