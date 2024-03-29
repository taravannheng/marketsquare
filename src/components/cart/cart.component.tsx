import { FC, useState } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import { Box } from "@mui/material";
import { ArrowBackIos } from "@mui/icons-material";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";

// component imports
import CartItem from "../cart-item/cart-item.component";
import Button from "../button/button.component";
import Alert from "../alert/alert.component";

// props or interfaces imports
import ProductInterface from "../../interfaces/product-interface";
import CartProps from "./cart.interface";

// styling imports
import {
  CartTitleSC,
  TotalContainerSC,
  TotalLabelSC,
  TotalTextSC,
  EmptyCartTextSC,
  ShoppingCartSC,
  CartSC,
  TitleContainerSC,
  IconButtonSC,
  CheckoutContainerSC,
  DrawerSC,
  EmptyCartContentSC,
  EmptyCartIconSC,
  AlertContainerSC,
  BadgeSC,
  BadgeContainerSC,
} from "./cart.styles";
import { COLORS } from "../../styles/styles";

// api imports
import { createCart } from "../../apis/carts/cart.api";

// state management imports
import {
  selectCart,
  selectCartTotal,
  selectCartLength,
} from "../../store/cart/cart.selector";

// constants and helper functions imports
import { formatPrice } from "../../utils/helpers";
import { ROUTES } from "../../utils/constants";

const Cart: FC<CartProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [checkoutButtonIsLoading, setCheckoutButtonIsLoading] = useState(false);
  const cart = useSelector(selectCart);
  const cartTotal = useSelector(selectCartTotal);
  const cartLength = useSelector(selectCartLength);
  const isCartEmpty = _.isEmpty(cart);

  const [alert, setAlert] = useState<{
    type: "info" | "success" | "error";
    message: string;
  }>({
    type: "error",
    message: "",
  });
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const handleCheckout = async () => {
    try {
      // hide alert if it's visible
      if (alertVisible) {
        setAlertVisible(false);
      }

      // change button loading state
      setCheckoutButtonIsLoading(true);

      // create cart and redirect to stripe payment page
      const response = await createCart(cart);
      window.location.href = response.data.url;
    } catch (error) {
      setAlert({
        type: "error",
        message:
          "An error has occured while checking out. Please try again later.",
      });
      setAlertVisible(true);

      console.error("Error during checkout:", error);
    } finally {
      setCheckoutButtonIsLoading(false);
    }
  };

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box display="flex" alignItems="center">
      <BadgeContainerSC onClick={handleDrawerOpen}>
        <BadgeSC badgeContent={cartLength}>
          <ShoppingCartSC />
        </BadgeSC>
      </BadgeContainerSC>

      <DrawerSC anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <CartSC>
          <TitleContainerSC>
            <IconButtonSC onClick={handleDrawerClose}>
              <ArrowBackIos />
            </IconButtonSC>
            <CartTitleSC>Cart</CartTitleSC>
          </TitleContainerSC>
          <AlertContainerSC>
            {alertVisible && (
              <Alert
                alertVisible
                setAlertVisible={setAlertVisible}
                type={alert.type}
              >
                {alert.message}
              </Alert>
            )}
          </AlertContainerSC>
          {!isCartEmpty &&
            cart.map((item: ProductInterface, index: number) => {
              return (
                <CartItem
                  item={item}
                  key={`cart-item-${item._id}`}
                  onCloseCart={handleDrawerClose}
                />
              );
            })}
          {!isCartEmpty && (
            <CheckoutContainerSC>
              <TotalContainerSC>
                <TotalLabelSC variant="body1">Total:</TotalLabelSC>
                <TotalTextSC variant="body1">
                  ${formatPrice(cartTotal)}
                </TotalTextSC>
              </TotalContainerSC>
              <Button
                onClick={handleCheckout}
                isLoading={checkoutButtonIsLoading}
                width="full"
                disabled={checkoutButtonIsLoading}
              >
                {!checkoutButtonIsLoading ? `Checkout` : `Checking Out`}
              </Button>
            </CheckoutContainerSC>
          )}
          {isCartEmpty && (
            <EmptyCartContentSC>
              <EmptyCartIconSC>
                <ShoppingBasketIcon
                  sx={{ fontSize: 120, color: COLORS.NEUTRAL.N50 }}
                />
              </EmptyCartIconSC>
              <EmptyCartTextSC>Cart is empty...</EmptyCartTextSC>
              <Button
                icon={<ShoppingBagIcon />}
                iconPosition="right"
                href={`${ROUTES.LANDING}`}
                rounded
              >
                Start Shopping
              </Button>
            </EmptyCartContentSC>
          )}
        </CartSC>
      </DrawerSC>
    </Box>
  );
};

export default Cart;
