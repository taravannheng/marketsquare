import { ReactNode } from "react";
import ProductInterface from "../../interfaces/product-interface";

export default interface ProductCardProps extends ProductInterface {
  children?: ReactNode;
}
