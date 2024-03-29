import { FC } from "react";

// 3rd-party dependencies imports
import { ArrowBackRounded } from "@mui/icons-material";
import _ from "lodash";

// component imports
import Button from "../button/button.component";
import OrderSummary from "../order-summary/index.component";
import OrderDetails from "../order-details/index.component";

// props or interfaces imports
import OrderSummaryDisplayProps from "./index.interface";

// styling imports
import {
  BackNavSC,
  ContentSC,
  OrderDetailsContainerSC,
  OrderSummaryContainerSC,
  OrderSummaryDisplaySC,
  TitleSC,
} from "./index.styles";

// constants or helper function imports
import { ROUTES } from "../../utils/constants";

const OrderSummaryDisplay: FC<OrderSummaryDisplayProps> = ({
  orderID,
  cartID,
  customer,
  payment,
  products,
  shipping,
}) => {
  const order = { orderID, cartID, customer, payment, products, shipping };
  const redirectToHomepage = () => {
    window.location.href = ROUTES.LANDING;
  };

  return (
    <OrderSummaryDisplaySC>
      <BackNavSC>
        <Button styleType="tertiary" icon={<ArrowBackRounded />} onClick={redirectToHomepage}>
          Home
        </Button>
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
