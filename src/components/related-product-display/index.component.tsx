import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";

// component imports
import RelatedProductCard from "../related-product-card/index.component";

// props or interfaces imports
import RelatedProductDisplayInterface from "./index.interface";
import ProductInterface from "../../interfaces/product-interface";

// styling imports
import { RelatedProductDisplaySC, StackSC, TitleSC, EmptyTextSC } from "./index.styles";

const RelatedProductDisplay: FC<RelatedProductDisplayInterface> = ({
  products,
}) => {
  return (
    <RelatedProductDisplaySC>
      <TitleSC>Related Products</TitleSC>
      <StackSC direction="column" spacing={2}>
        {!_.isEmpty(products) &&
          products!.map((product: ProductInterface) => {
            return <RelatedProductCard key={`related-product-card-${product?._id ?? ''}`} product={product} />;
          })}
      </StackSC>
      {_.isEmpty(products) && <EmptyTextSC>No Related Products...</EmptyTextSC>}
    </RelatedProductDisplaySC>
  );
};

export default RelatedProductDisplay;
