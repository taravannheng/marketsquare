import { ReactNode } from "react";

import ProductInterface from "../../interfaces/product-interface";

interface ProductsDisplayInterface {
  children?: ReactNode;
  title?: string;
  products: ProductInterface[];
}

export default ProductsDisplayInterface;