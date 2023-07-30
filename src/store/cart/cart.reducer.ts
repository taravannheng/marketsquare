import CART_ACTION_TYPES from "./cart.types";
import {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "./cart.action";
import ProductInterface from "../../interfaces/product-interface";

export const CART_INITIAL_STATE = {
  cart: [] as ProductInterface[],
};

export interface CartActionInterface {
  type: string;
  payload: ProductInterface;
}

export const cartReducer = (
  state = CART_INITIAL_STATE,
  action: CartActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      return { ...state, cart: addToCart(state.cart, payload) };
    case CART_ACTION_TYPES.INCREASE_QUANTITY:
      return {
        ...state,
        cart: increaseQuantity(state.cart, payload),
      };
    case CART_ACTION_TYPES.DECREASE_QUANTITY:
      return {
        ...state,
        cart: decreaseQuantity(state.cart, payload),
      };
    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeFromCart(state.cart, payload),
      };
    case CART_ACTION_TYPES.CLEAR_CART:
      return {
        ...state,
        cart: clearCart(),
      };
    default:
      return state;
  }
};
