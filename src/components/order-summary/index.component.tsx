import { FC } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import RelatedProductCard from "../related-product-card/index.component";
import OrderSummaryProps from "./index.interface";
import ProductInterface from "../../interfaces/product-interface";
import {
  ContentSC,
  EmptyContentSC,
  OrderSummarySC,
  ProductStackSC,
  TitleSC,
  TotalAmountSC,
  TotalTextSC,
} from "./index.style";

const OrderSummary: FC<OrderSummaryProps> = ({ products, totalAmount }) => {
  const totalInCents = totalAmount;
  const totalInDollars = totalInCents / 100;

  return (
    <OrderSummarySC>
      {!_.isEmpty(products) && (
        <ContentSC>
          <TitleSC variant="h5">Products</TitleSC>
          <ProductStackSC direction="column" spacing={1}>
            {products.map((product: ProductInterface) => {
              return (
                <RelatedProductCard
                  key={`order-related-product-card-${product?._id ?? ""}`}
                  product={product}
                />
              );
            })}
          </ProductStackSC>
          <TotalTextSC variant="body1">
            Total:{" "}
            <TotalAmountSC variant="caption">${totalInDollars}</TotalAmountSC>
          </TotalTextSC>
        </ContentSC>
      )}

      {_.isEmpty(products) && <EmptyContentSC>No Data...</EmptyContentSC>}
    </OrderSummarySC>
  );
};

export default OrderSummary;
