import StoreStateInterface from "../../interfaces/store.interface";

export const selectCart = (state: StoreStateInterface) => state.cart.cart;
export const selectCartTotal = (state: StoreStateInterface) => state.cart.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartLength = (state: StoreStateInterface) => state.cart.cart.length;