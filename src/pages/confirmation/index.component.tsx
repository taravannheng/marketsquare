import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";

import { createOrder } from "../../apis/orders/order.api";
import orderSample from "../../sample/order/order.sample";
import OrderSummaryDisplay from "../../components/order-summary-display/index.component";
import Header from "../../components/header/index.component";
import footerUtilityLinksSample from "../../sample/footer/utility-links-sample";
import Footer from "../../components/footer/index.component";
import { ConfirmationPageSC } from "./index.styles";
import OrderInterface from "../../interfaces/order.interface";
import { selectOrder } from "../../store/order/order.selector";

const ConfirmationPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const success = params.get("success");
  const cartID = params.get("cartID");
  const order = useSelector(selectOrder);
  const dispatch = useDispatch();

  useEffect(() => {
    // clear cart
    dispatch({ type: "CLEAR_CART" });

    // send order to server
    const sendOrder = async () => {
      const response = await createOrder(cartID);
      if (!_.isEmpty(response.data)) {
        dispatch({ type: "SET_ORDER", payload: response.data.order });
      }
    };

    sendOrder();
  }, []);

  return (
    <>
      {!_.isEmpty(order) && (
        <ConfirmationPageSC>
          <Header />
          {<OrderSummaryDisplay {...order} />}
          <Footer footerItems={footerUtilityLinksSample} />
        </ConfirmationPageSC>
      )}
    </>
  );
};

export default ConfirmationPage;
