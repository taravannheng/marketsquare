import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

interface ProductsDisplayProps {
  children?: ReactNode;
  title?: string;
  products: ProductInterface[];
}

export default ProductsDisplayProps;