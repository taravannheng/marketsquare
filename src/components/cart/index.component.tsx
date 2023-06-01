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
import Logo from "../../assets/logos/logo-transparent.png";
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

    return total.toFixed(2);
  };

  const checkoutHandler = async () => {
    setCheckoutButtonIsLoading(true);
    const response = await createCart(cart);
    const url = response.data.url;
    window.location.href = url;
  }

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
            <img src={Logo} alt="logo" width="64px" height="64px" />
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
                uppercaseLabel
                labelColor="#414554"
                backgroundColor="#E7E8EA"
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
