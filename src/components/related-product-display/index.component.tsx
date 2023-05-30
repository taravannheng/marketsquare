import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';
import _ from "lodash";

import RelatedProductDisplayInterface from "./index.interface";
import RelatedProductCard from "../related-product-card/index.component";
import { RelatedProductDisplaySC, StackSC, TitleSC, EmptyTextSC } from "./index.styles";
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
            return <RelatedProductCard key={uuidv4()} product={product} />;
          })}
      </StackSC>
      {_.isEmpty(products) && <EmptyTextSC>No Related Products...</EmptyTextSC>}
    </RelatedProductDisplaySC>
  );
};

export default RelatedProductDisplay;
