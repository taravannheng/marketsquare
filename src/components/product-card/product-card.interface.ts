import { ReactNode } from "react";
import ProductInterface from "../../interfaces/product-interface";

export default interface ProductCardInterface extends ProductInterface {
  children?: ReactNode;
}
