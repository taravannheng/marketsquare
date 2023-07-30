import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectOrderSlice = (state: StoreStateInterface) => state.order;

export const selectOrder = createSelector(
  [selectOrderSlice],
  (order) => order.order
);
