import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectProductSlice = (state: StoreStateInterface) => state.product;

export const selectProducts = createSelector(
  [selectProductSlice],
  (product) => product.products
);

export const selectProduct = (productId: string) =>
  createSelector([selectProducts], (products) =>
    products.find((product) => product._id === productId)
  );
