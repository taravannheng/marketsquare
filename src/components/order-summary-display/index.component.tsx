import { FC } from "react";
import { ArrowBackRounded } from "@mui/icons-material";

import OrderSummaryDisplayInterface from "./index.interface";
import {
  BackNavSC,
  ContentSC,
  OrderDetailsContainerSC,
  OrderSummaryContainerSC,
  OrderSummaryDisplaySC,
  TitleSC,
} from "./index.styles";
import Button from "../button/index.component";
import { ROUTES } from "../../utils/constants";
import OrderSummary from "../order-summary/index.component";
import OrderDetails from "../order-details/index.component";
import _ from "lodash";

const OrderSummaryDisplay: FC<OrderSummaryDisplayInterface> = ({
  orderID,
  cartID,
  customer,
  payment,
  products,
  shipping,
}) => {
  const order = {orderID, cartID, customer, payment, products, shipping};
  const redirectToHomepage = () => {
    window.location.href = ROUTES.LANDING;
  };

  return (
    <OrderSummaryDisplaySC>
      <BackNavSC>
        <Button
          height="40px"
          width="112px"
          icon={<ArrowBackRounded />}
          label="Home"
          styleType="icon"
          actionType="button"
          clickHandler={redirectToHomepage}
        />
      </BackNavSC>
      <TitleSC variant="h5">Order Summary</TitleSC>
      {!_.isEmpty(orderID) && (
        <ContentSC>
          <OrderSummaryContainerSC>
            <OrderSummary products={products} totalAmount={payment.amount} />
          </OrderSummaryContainerSC>
          <OrderDetailsContainerSC>
            <OrderDetails {...order} />
          </OrderDetailsContainerSC>
        </ContentSC>
      )}
    </OrderSummaryDisplaySC>
  );
};

export default OrderSummaryDisplay;
