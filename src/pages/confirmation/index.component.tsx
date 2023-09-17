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
import ProductInterface from "../../interfaces/product-interface";
import { selectUser } from '../../store/user/user.selector';
import { selectOrder } from "../../store/order/order.selector";
import { selectReviews } from "../../store/review/review.selector";

const ConfirmationPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const success = params.get("success");
  const cartID = params.get("cartID");
  const user = useSelector(selectUser);
  const order = useSelector(selectOrder);
  const reviews = useSelector(selectReviews);
  const dispatch = useDispatch();

  useEffect(() => {
    // clear cart
    dispatch({ type: "CLEAR_CART" });

    // send order to server
    const sendOrder = async () => {
      const response = await createOrder({ userID: user?.id, cartID });
      if (!_.isEmpty(response.data)) {
        dispatch({ type: "SET_ORDER", payload: response.data.order });

        // remove products reviews from state
        // extract product ids from order
        const productIDs = response.data.order.products.map(
          (product: ProductInterface) => product._id
        );

        // filter reviews
        productIDs.map((productID: string) => {
          // @ts-ignore
          return delete reviews[`${productID}`];
        });

        // update reviews state
        dispatch({
          type: "ADD_REVIEWS",
          payload: reviews,
        });
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
