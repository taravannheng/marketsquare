import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectRelatedProductSlice = (state: StoreStateInterface) => state.relatedProduct;

export const selectRelatedProducts = createSelector(
  [selectRelatedProductSlice],
  (relatedProduct) => relatedProduct.relatedProducts
);
