import { FC, useEffect } from "react";
import { useLocation } from "react-router-dom";

// 3rd-party dependencies imports
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";

// component imports
import Header from "../../components/header/index.component";
import Footer from "../../components/footer/footer.component";
import OrderSummaryDisplay from "../../components/order-summary-display/index.component";

// state management imports
import { selectUser } from '../../store/user/user.selector';
import { selectOrder } from "../../store/order/order.selector";
import { selectReviews } from "../../store/review/review.selector";
import REVIEW_ACTION_TYPES from "../../store/review/review.types";

// api imports
import { createOrder } from "../../apis/orders/order.api";

// styling imports
import { ConfirmationPageSC } from "./index.styles";

// constants or helper functions imports
import footerUtilityLinksSample from "../../sample/footer/utility-links-sample";

const ConfirmationPage: FC = () => {
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
      const response = await createOrder({ userID: user?._id, cartID });
      if (!_.isEmpty(response.data)) {
        dispatch({ type: "SET_ORDER", payload: response.data.order });

        // clear reviews
        dispatch({
          type: REVIEW_ACTION_TYPES.CLEAR_REVIEWS,
        });
      }
    };
    
    if (order.cartID !== cartID) {
      sendOrder();
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
