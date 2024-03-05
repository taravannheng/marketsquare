import { ReactNode } from "react";

interface ProductCategoryProps {
  children?: ReactNode;
  title: string;
  images: string[];
}

export default ProductCategoryProps;