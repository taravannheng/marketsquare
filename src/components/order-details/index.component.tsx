import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import { CreditCard } from "@mui/icons-material";

// component imports
import Button from "../button/button.component";

// props or interfaces imports
import OrderDetailsProps from "../../interfaces/order.interface";

// styling imports
import {
  ButtonContainerSC,
  CardIconSC,
  CardLogoSC,
  ConfirmationEmailSC,
  ContentSC,
  EmptyContentTextSC,
  LastFourSC,
  OrderDetailsSC,
  OrderIDSC,
  PaymentMethodSC,
  PaymentMethodTextSC,
  PaymentSC,
  PaymentTitleSC,
  ShippingAddressDetailsSC,
  ShippingAddressSC,
  ShippingMethodSC,
  ShippingSC,
  ShippingTitleSC,
} from "./index.style";

// constants or helper functions imports
import { getCardLogo } from "../../utils/helpers";
import { ROUTES } from "../../utils/constants";

const OrderDetails: FC<OrderDetailsProps> = ({
  orderID,
  customer,
  payment,
  shipping,
}) => {
  let cardLogo = getCardLogo(payment.cardBrand);

  const redirectToHomepage = () => {
    window.location.href = ROUTES.LANDING;
  };

  return (
    <OrderDetailsSC>
      {!_.isEmpty(orderID) && (
        <ContentSC>
          <OrderIDSC variant="h1">Order #{orderID}</OrderIDSC>
          <ConfirmationEmailSC variant="body1">
            A confirmation email has been sent to {customer.email}.
          </ConfirmationEmailSC>
          <PaymentSC>
            <PaymentTitleSC variant="h2">Payment</PaymentTitleSC>
            <PaymentMethodSC>
              <PaymentMethodTextSC variant="h2">
                Payment is made using:{" "}
                {!_.isEmpty(cardLogo) && (
                  <CardLogoSC image={cardLogo} title="card logo" />
                )}{" "}
                {_.isEmpty(cardLogo) && (
                  <CardIconSC>
                    <CreditCard />
                  </CardIconSC>
                )}
                <LastFourSC variant="body1">
                  **** {payment.cardLast4}
                </LastFourSC>
              </PaymentMethodTextSC>
            </PaymentMethodSC>
          </PaymentSC>
          <ShippingSC>
            <ShippingTitleSC variant="h2">Shipping</ShippingTitleSC>
            <ShippingAddressSC variant="h2">
              Address:{" "}
              <ShippingAddressDetailsSC variant="body1">
                {shipping.address.line1}{" "}<br />
                 {!_.isEmpty(shipping.address.line2) && <>{shipping.address.line2}<br /></>
                  }{" "}
                {shipping.address.city} {shipping.address.state}{" "}
                {shipping.address.postalCode} {shipping.address.country}
              </ShippingAddressDetailsSC>
            </ShippingAddressSC>
            <ShippingMethodSC variant="body1">
              The shipping method and expected delivery date will be sent via
              email once the information is obtained from the carrier.
            </ShippingMethodSC>
          </ShippingSC>
          <ButtonContainerSC>
            <Button onClick={redirectToHomepage}>Continue Shopping</Button>
          </ButtonContainerSC>
        </ContentSC>
      )}
      {_.isEmpty(orderID) && (
        <EmptyContentTextSC variant="body1">No Data...</EmptyContentTextSC>
      )}
    </OrderDetailsSC>
  );
};

export default OrderDetails;
