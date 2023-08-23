import { FC } from "react";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

import CartItemProps from "./cart-item.interface";
import { adjustCloudinaryImgSize, formatPrice } from "../../utils/helpers";
import {
  CartItemRootSC,
  CartItemImageSC,
  CartItemContentSC,
  ItemNameSC,
  ItemSubTotalSC,
  QuantityContainerSC,
  DecreaseButtonSC,
  IncreaseButtonSC,
  QuantityTextSC,
  RemoveButtonSC,
  ControlContainerSC,
} from "./cart-item.styles";
import { selectCart } from "../../store/cart/cart.selector";
import CART_ACTION_TYPES from "../../store/cart/cart.types";

const CartItem: FC<CartItemProps> = ({ item, closeCartHandler }) => {
  const { INCREASE_QUANTITY, DECREASE_QUANTITY, REMOVE_FROM_CART } = CART_ACTION_TYPES;
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const { imgUrls, name, price, quantity } = item;

  // ADJUST IMAGE SIZE
  const DEFAULT_IMG_SIZE = 280;
  const imgUrl = adjustCloudinaryImgSize(imgUrls[0], DEFAULT_IMG_SIZE);

  // HANDLERS
  const increaseQuantity = () => {
    dispatch({
      type: INCREASE_QUANTITY,
      payload: item,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: DECREASE_QUANTITY,
      payload: item,
    });
  };

  const removeItem = () => {
    if (cart.length === 1) {
      setTimeout(() => {
        closeCartHandler();
      }, 300);
    }

    dispatch({
      type: REMOVE_FROM_CART,
      payload: item,
    });
  };

  return (
    <CartItemRootSC>
      <CartItemImageSC image={imgUrl} />
      <CartItemContentSC>
        <ItemNameSC variant="h6">{name}</ItemNameSC>
        <ItemSubTotalSC variant="subtitle1">
          ${formatPrice((price * quantity))}
        </ItemSubTotalSC>
        <ControlContainerSC>
          <QuantityContainerSC>
            <DecreaseButtonSC
              onClick={decreaseQuantity}
              disabled={quantity === 1}
            >
              <Remove />
            </DecreaseButtonSC>
            <QuantityTextSC>{quantity}</QuantityTextSC>
            <IncreaseButtonSC onClick={increaseQuantity}>
              <Add />
            </IncreaseButtonSC>
          </QuantityContainerSC>
          <RemoveButtonSC onClick={removeItem}>
            <Delete />
          </RemoveButtonSC>
        </ControlContainerSC>
      </CartItemContentSC>
    </CartItemRootSC>
  );
};

export default CartItem;
