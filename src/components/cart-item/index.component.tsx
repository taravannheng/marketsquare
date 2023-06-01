import { FC, useContext } from "react";
import { Add, Remove, Delete } from "@mui/icons-material";
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

import CartContext from "../../contexts/cart-context";
import ProductInterface from "../../interfaces/product-interface";
import CartItemProps from "./index.interface";
import { formatPrice } from "../../utils/helpers";

const CartItem: FC<CartItemProps> = ({ item, closeCartHandler }) => {
  const { cart, setCart } = useContext(CartContext);

  const increaseQuantity = () => {
    setCart((prevProducts: ProductInterface[]) => {
      const updatedProducts = prevProducts.map((product: any) => {
        if (product._id === item._id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return product;
      });

      return updatedProducts;
    });
  };

  const decreaseQuantity = () => {
    setCart((prevProducts: ProductInterface[]) => {
      const updatedProducts = prevProducts.map((product: any) => {
        if (product._id === item._id) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return product;
      });

      return updatedProducts;
    });
  };

  const removeItem = () => {
    if (cart.length === 1) {
      // set time out is for delaying the closing to let the user see that the cart is empty before closing
      setTimeout(() => {
        closeCartHandler();
      }, 300);
    }

    setCart((prevProducts: ProductInterface[]) => {
      const updatedProducts = prevProducts.filter(
        (product) => product._id !== item._id
      );
      return updatedProducts;
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
