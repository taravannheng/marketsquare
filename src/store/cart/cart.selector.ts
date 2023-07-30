import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectCartSlice = (state: StoreStateInterface) => state.cart;

export const selectCart = createSelector(
  [selectCartSlice],
  (cart) => cart.cart
);

export const selectCartTotal = createSelector(
  [selectCart],
  (cart) =>
    cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    )
);

export const selectCartLength = createSelector(
  [selectCart],
  (cart) => cart.length
);
