import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";

// component imports
import RelatedProductCard from "../related-product-card/related-product-card.component";

// props or interfaces imports
import RelatedProductDisplayProps from "./related-product-display.interface";
import ProductInterface from "../../interfaces/product-interface";

// styling imports
import { RelatedProductDisplaySC, StackSC, TitleSC, EmptyTextSC } from "./related-product-display.styles";

const RelatedProductDisplay: FC<RelatedProductDisplayProps> = ({
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
