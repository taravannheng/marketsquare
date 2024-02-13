import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectOrderListSlice = (state: StoreStateInterface) => state.orderList;

export const selectOrderList = createSelector(
  [selectOrderListSlice],
  (orderList) => orderList.orderList
);
