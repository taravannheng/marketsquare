import { FC } from "react";

import RelatedProductDisplayInterface from "./index.interface";
import RelatedProductCard from "../related-product-card/index.component";
import { RelatedProductDisplaySC, StackSC, TitleSC, EmptyTextSC } from "./index.styles";
import _ from "lodash";
import ProductInterface from "../../interfaces/product-interface";

const RelatedProductDisplay: FC<RelatedProductDisplayInterface> = ({
  products,
}) => {
  return (
    <RelatedProductDisplaySC>
      <TitleSC>Related Products</TitleSC>
      <StackSC direction="column" spacing={2}>
        {!_.isEmpty(products) &&
          products.map((product: ProductInterface) => {
            return <RelatedProductCard product={product} />;
          })}
      </StackSC>
      {_.isEmpty(products) && <EmptyTextSC>No Related Products...</EmptyTextSC>}
    </RelatedProductDisplaySC>
  );
};

export default RelatedProductDisplay;
