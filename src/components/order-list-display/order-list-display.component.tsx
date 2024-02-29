import { FC, useEffect, useState } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

// api imports
import { getOrdersByUserID } from "../../apis/orders/order.api";
import { getMultipleCarts } from "../../apis/carts/cart.api";
import { getMultipleProducts } from "../../apis/products/products.api";

// component imports
import Button from "../button/button.component";
import ProgressIndicator from "../progress-indicator/index.component";
import OrderListItem from "../order-list-item/order-list-item.component";
import Divider from "../divider/divider.component";

// props or interfaces imports
import OrderListDisplayProps from "./order-list-display.interface";
import ProductInterface from "../../interfaces/product-interface";
import OrderListItemInterface from "../../interfaces/order-list-item.interface";

// state management imports
import { selectUser } from "../../store/user/user.selector";
import { selectOrderList } from "../../store/order-list/order-list.selector";
import ORDER_LIST_ACTION_TYPES from "../../store/order-list/order-list.types";

// styling imports
import {
  TitleSC,
  OrderListDisplaySC,
  OrderListEmptyDescriptionSC,
  OrderListEmptyIconSC,
  OrderListEmptySC,
  ProgressIndicatorContainerSC,
} from "./order-list-display.styles";
import { space, COLORS } from "../../styles/styles";

// constants or helper function imports
import { ROUTES } from "../../utils/constants";

const fetchOrdersByUserID = async (userID: string) => {
  try {
    const response = await getOrdersByUserID(userID);

    return response.data ?? null;
  } catch (error: any) {
    console.log(error);
  }
};

const fetchMultipleCarts = async (cartIDs: string[]) => {
  try {
    const response = await getMultipleCarts(cartIDs);

    return response.data ?? null;
  } catch (error: any) {
    console.log(error);
  }
};

const fetchMultipleProducts = async (productIDs: string[]) => {
  try {
    const response = await getMultipleProducts(productIDs);

    return response.data ?? null;
  } catch (error: any) {
    console.log(error);
  }
};

const OrderListDisplay: FC<OrderListDisplayProps> = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const orderList = useSelector(selectOrderList);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      let orders: any[] = [];
      const orderData = await fetchOrdersByUserID(user._id);
      let cartData: any[] = [];
      let productData: ProductInterface[] = [];

      if (!_.isEmpty(orderData)) {
        let cartIDs = [];

        // extract cartIDs and push to cartIDs array
        for (const order of orderData) {
          const { cartID } = order;

          cartIDs.push(cartID);
        }

        // fetch cart data
        cartData = await fetchMultipleCarts(cartIDs);
      }

      if (!_.isEmpty(cartData)) {
        // extract productIDs from carts and assign to productIDs
        let productIDs: string[] = [];

        for (const cart of cartData) {
          const { products } = cart;

          for (const product of products) {
            const { _id } = product;

            if (!productIDs.includes(_id)) {
              productIDs.push(_id);
            }
          }
        }

        // fetch product data using fetchMultipleProducts
        productData = await fetchMultipleProducts(productIDs);
      }

      // add item into orders array
      if (
        !_.isEmpty(orderData) &&
        !_.isEmpty(cartData) &&
        !_.isEmpty(productData)
      ) {
        // loop through each order
        for (const order of orderData) {
          // extract orderID, orderDate and cartID
          const { orderID, createdAt, cartID } = order;

          // loop through each cart -> compare cartID with order.cartID
          const productIDs: string[] = [];
          const products = [];
          for (const cart of cartData) {
            // matched -> extract _id and push to an array
            if (cart.cartID === cartID) {
              for (const product of cart.products) {
                if (!productIDs.includes(product._id)) {
                  productIDs.push(product._id);
                }
              }
            }
          }

          // use _id to extract product data from productData
          for (const productID of productIDs) {
            const matchedProduct = productData.filter(
              (product: ProductInterface) => product._id === productID
            );

            if (!_.isEmpty(matchedProduct)) {
              products.push(matchedProduct[0]);
            }
          }

          // put orderID, orderDate, cartID and products into an object -> push to orders array
          // extract date from createdAt
          const orderDate = createdAt.substring(0, 10).replace(/-/g, "/");

          if (!_.isEmpty(products)) {
            orders.push({ orderID, orderDate, cartID, products });
          }
        }
      }

      // add orders to orderList state
      dispatch({
        type: ORDER_LIST_ACTION_TYPES.ADD_ORDERS,
        payload: orders,
      });

      return setIsLoading(false);
    };

    if (user && _.isEmpty(orderList)) {
      fetchOrders();
    }

    setIsLoading(false);
  }, []);

  return (
    <OrderListDisplaySC>
      <TitleSC>Order History</TitleSC>
      {isLoading && (
        <ProgressIndicatorContainerSC>
          <ProgressIndicator size={20} />
        </ProgressIndicatorContainerSC>
      )}
      {!_.isEmpty(orderList) && !isLoading && (
        <TransitionGroup>
          {orderList.map((order: OrderListItemInterface) => {
            return (
              <Collapse
                key={`order-list-item-${order.orderID}`}
                sx={{
                  "&:not(:last-child)": {
                    marginBottom: `${space.m} !important`,
                  },
                }}
              >
                <OrderListItem order={order} />
                <Divider color={COLORS.NEUTRAL.N100} />
              </Collapse>
            );
          })}
        </TransitionGroup>
      )}
      {_.isEmpty(orderList) && !isLoading && (
        <OrderListEmptySC>
          <OrderListEmptyIconSC>
            <ShoppingBagIcon />
          </OrderListEmptyIconSC>
          <OrderListEmptyDescriptionSC>
            There is no order history yet. Start purchasing some products...
          </OrderListEmptyDescriptionSC>
          <Button href={ROUTES.LANDING} rounded>
            Browse Products
          </Button>
        </OrderListEmptySC>
      )}
    </OrderListDisplaySC>
  );
};

export default OrderListDisplay;
