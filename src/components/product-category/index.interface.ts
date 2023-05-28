import { ReactNode } from "react";

interface ProductCategoryInterface {
  children?: ReactNode;
  title: string;
  images: string[];
}

export default ProductCategoryInterface;