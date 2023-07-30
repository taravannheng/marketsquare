import { createSelector } from "reselect";

import StoreStateInterface from "../../interfaces/store.interface";

export const selectUserSlice = (state: StoreStateInterface) => state.user;

export const selectUser = createSelector(
  [selectUserSlice],
  (user) => user.user
);
