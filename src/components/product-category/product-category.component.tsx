import { FC } from "react";

// props or interfaces imports
import ProductCategoryProps from './product-category.interface';

// styling imports
import {
  LeftContainerContentSC,
  LeftContainerSC,
  ProductCategorySC,
  ProductContainerSC,
  RightContainerBottomContentSC,
  RightContainerSC,
  RightContainerTopContentSC,
  TitleSC,
} from "./product-category.styles";

const ProductCategory: FC<ProductCategoryProps> = ({ title, images }) => {
  return (
    <ProductCategorySC>
      <TitleSC variant="h5">{title}</TitleSC>
      <ProductContainerSC>
        <LeftContainerSC>
          <LeftContainerContentSC image={images[0]} />
        </LeftContainerSC>
        <RightContainerSC>
          <RightContainerTopContentSC image={images[1]} />
          <RightContainerBottomContentSC image={images[2]} />
        </RightContainerSC>
      </ProductContainerSC>
    </ProductCategorySC>
  );
};

export default ProductCategory;
