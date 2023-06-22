import { FC } from "react";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

import CartItemProps from "./index.interface";
import { formatPrice } from "../../utils/helpers";
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
} from "./index.styles";
import { selectCart } from "../../store/cart/cart.selector";

const CartItem: FC<CartItemProps> = ({ item, closeCartHandler }) => {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: item,
    });
  };

  const decreaseQuantity = () => {
    dispatch({
      type: "DECREASE_QUANTITY",
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
      type: "REMOVE_FROM_CART",
      payload: item,
    });
  };

  return (
    <CartItemRootSC>
      <CartItemImageSC image={item.imgUrls[0]} />
      <CartItemContentSC>
        <ItemNameSC variant="h6">{item.name}</ItemNameSC>
        <ItemSubTotalSC variant="subtitle1">
          ${formatPrice((item.price * item.quantity))}
        </ItemSubTotalSC>
        <ControlContainerSC>
          <QuantityContainerSC>
            <DecreaseButtonSC
              onClick={decreaseQuantity}
              disabled={item.quantity === 1}
            >
              <Remove />
            </DecreaseButtonSC>
            <QuantityTextSC>{item.quantity}</QuantityTextSC>
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
