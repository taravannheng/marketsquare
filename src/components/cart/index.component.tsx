import { FC, useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";
import { Box, Icon, IconButton, Drawer, List } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";

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
} from "./index.styles";
import CartContext from "../../contexts/cart-context";
import ProductInterface from "../../interfaces/product-interface";
import CartProps from "./index.interface";
import { formatPrice } from "../../utils/helpers";
import { createCart } from "../../apis/carts/cart.api";

const Cart: FC<CartProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkoutButtonIsLoading, setCheckoutButtonIsLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext);

  const getCartTotal = (cart: ProductInterface[]) => {
    let total = 0;

    for (const item of cart) {
      const { price, quantity } = item;
      total += price * quantity;
    }

    return formatPrice(total);
  };

  const checkoutHandler = async () => {
    setCheckoutButtonIsLoading(true);
    const response = await createCart(cart);
    const url = response.data.url;
    window.location.href = url;
  };

  // drawer handler

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
        <Icon>
          <CartCounterSC>{cart.length}</CartCounterSC>
        </Icon>
      </CartButtonSC>

      <DrawerSC anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <CartSC>
          <LogoContainerSC>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-transparent.svg?alt=media&token=251c1267-68e9-49bf-b04e-c6519ab85019&_gl=1*1rzqx3t*_ga*MTcyMjg1OTQuMTY4NTMxNjU0MA..*_ga_CW55HF8NVT*MTY4NTU2MTAwMC40LjEuMTY4NTU2MTE1OS4wLjAuMA.."
              alt="logo"
              width="64px"
              height="64px"
            />
          </LogoContainerSC>
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
                  key={uuidv4()}
                  closeCartHandler={handleDrawerClose}
                />
              );
            })}
          {!_.isEmpty(cart) && (
            <CheckoutContainerSC>
              <TotalContainerSC>
                <TotalLabelSC variant="body1">Total:</TotalLabelSC>
                <TotalTextSC variant="body1">${getCartTotal(cart)}</TotalTextSC>
              </TotalContainerSC>
              <Button
                boldLabel
                uppercaseLabel
                labelColor="#12162A"
                backgroundColor="#F2F2F2"
                label="Checkout"
                type="default"
                clickHandler={checkoutHandler}
                isLoading={checkoutButtonIsLoading}
              />
            </CheckoutContainerSC>
          )}
          {_.isEmpty(cart) && (
            <EmptyCartTextSC>Cart is empty...</EmptyCartTextSC>
          )}
        </CartSC>
      </DrawerSC>
    </Box>
  );
};

export default Cart;
