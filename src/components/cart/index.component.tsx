import { FC, useState } from "react";
import _ from "lodash";
import { Box, Icon, IconButton, Drawer, List } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { useSelector } from "react-redux";

import CartItem from "../cart-item/index.component";
import Button from "../button/index.component";
import {
  CartTitleSC,
  TotalContainerSC,
  TotalLabelSC,
  TotalTextSC,
  CheckoutButtonSC,
  EmptyCartTextSC,
  CartButtonSC,
  CartCounterSC,
  ShoppingCartSC,
  CartSC,
  LogoContainerSC,
  TitleContainerSC,
  IconButtonSC,
  CheckoutContainerSC,
  DrawerSC,
  EmptyCartContentSC,
  EmptyCartIconSC,
  ShoppingButtonSC,
  ShoppingButtonIconSC,
} from "./index.styles";
import CartProps from "./index.interface";
import { createCart } from "../../apis/carts/cart.api";
import {
  selectCart,
  selectCartTotal,
  selectCartLength,
} from "../../store/cart/cart.selector";
import { formatPrice } from "../../utils/helpers";
import EmptyCartIcon from '../../assets/icons/cart-empty.png';
import { ROUTES } from "../../utils/constants";

const Cart: FC<CartProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkoutButtonIsLoading, setCheckoutButtonIsLoading] = useState(false);
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const cartLength = useSelector(selectCartLength);

  const checkoutHandler = async () => {
    setCheckoutButtonIsLoading(true);
    const response = await createCart(cart);
    const url = response.data.url;
    window.location.href = url;
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box display="flex" alignItems="center">
      <CartButtonSC onClick={handleDrawerOpen}>
        <ShoppingCartSC />
        <CartCounterSC>{cartLength}</CartCounterSC>
      </CartButtonSC>

      <DrawerSC anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <CartSC>
          {/* <LogoContainerSC>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-transparent.svg?alt=media&token=251c1267-68e9-49bf-b04e-c6519ab85019&_gl=1*mparyn*_ga*NzA5MzcyODc5LjE2ODU2MzYyOTA.*_ga_CW55HF8NVT*MTY4NTYzNjI5MC4xLjEuMTY4NTYzNjQ0MC4wLjAuMA.."
              alt="logo"
              width="64px"
              height="64px"
            />
          </LogoContainerSC> */}
          <TitleContainerSC>
            <IconButtonSC onClick={handleDrawerClose}>
              <ArrowBackIos />
            </IconButtonSC>
            <CartTitleSC>Cart</CartTitleSC>
          </TitleContainerSC>
          {!_.isEmpty(cart) &&
            cart.map((item: any, index: number) => {
              return (
                <CartItem
                  item={item}
                  key={`cart-item-${item._id}`}
                  closeCartHandler={handleDrawerClose}
                />
              );
            })}
          {!_.isEmpty(cart) && (
            <CheckoutContainerSC>
              <TotalContainerSC>
                <TotalLabelSC variant="body1">Total:</TotalLabelSC>
                <TotalTextSC variant="body1">
                  ${formatPrice(cartTotal)}
                </TotalTextSC>
              </TotalContainerSC>
              <Button
                boldLabel
                uppercaseLabel
                labelColor="#12162A"
                backgroundColor="#F2F2F2"
                label="Checkout"
                styleType="default"
                actionType="button"
                clickHandler={checkoutHandler}
                isLoading={checkoutButtonIsLoading}
              />
            </CheckoutContainerSC>
          )}
          {_.isEmpty(cart) && (
            <EmptyCartContentSC>
              <EmptyCartIconSC>
                <img
                  src={EmptyCartIcon}
                  alt="empty cart icon"
                  width="160px"
                  height="160px"
                />
              </EmptyCartIconSC>
              <EmptyCartTextSC>Cart is empty...</EmptyCartTextSC>
              <ShoppingButtonSC href={`${ROUTES.LANDING}`}>
                Start Shopping
                <ShoppingButtonIconSC>
                  <ShoppingBagIcon />
                </ShoppingButtonIconSC>
              </ShoppingButtonSC>
            </EmptyCartContentSC>
          )}
        </CartSC>
      </DrawerSC>
    </Box>
  );
};

export default Cart;
