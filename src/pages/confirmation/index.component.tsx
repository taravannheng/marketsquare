import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { createOrder } from "../../apis/orders/order.api";
import orderSample from "../../sample/order/order.sample";
import OrderSummaryDisplay from "../../components/order-summary-display/index.component";
import Header from "../../components/header/index.component";
import footerUtilityLinksSample from "../../sample/footer/utility-links-sample";
import Footer from "../../components/footer/index.component";
import { ConfirmationPageSC } from "./index.styles";
import OrderInterface from "../../interfaces/order.interface";
import _ from "lodash";

const ConfirmationPage = () => {
  const [order, setOrder] = useState<OrderInterface>({} as OrderInterface);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const success = params.get("success");
  const cartID = params.get("cartID");

  useEffect(() => {
    const stringCartIDs = sessionStorage.getItem('cartIDs');
    let stringOrder: string | null = '';
    let orderSS = null;
    let cartIDs = [];

    if (!_.isEmpty(cartID)) {
      stringOrder = sessionStorage.getItem(cartID!);
      orderSS = JSON.parse(stringOrder!)
      setOrder(orderSS);
    }
    
    if (!_.isEmpty(stringCartIDs)) {
      cartIDs = JSON.parse(stringCartIDs!);
    }

    if (_.isEmpty(cartIDs) || !cartIDs.includes(cartID)) {
      //send data to db
      const sendOrder = async () => {
        const response = await createOrder(cartID);
        if (!_.isEmpty(response.data)) {
          setOrder(response.data.order);
          console.log(response.data.order);
          cartID && sessionStorage.setItem(cartID, JSON.stringify(response.data.order));
        }
      };

      sendOrder();

      const newCartIDs = [...cartIDs, cartID]

      sessionStorage.setItem('cartIDs', JSON.stringify(newCartIDs));
    }
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
