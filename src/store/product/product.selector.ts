import StoreStateInterface from "../../interfaces/store.interface";

export const selectProducts = (state: StoreStateInterface) => state.product.products;

