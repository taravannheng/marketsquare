import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectProductSlice = (state: StoreStateInterface) => state.product;

export const selectProducts = createSelector(
  [selectProductSlice],
  (product) => product.products
);
