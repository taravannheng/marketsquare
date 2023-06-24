import ORDER_ACTION_TYPES from "./order.types";
import OrderInterface from "../../interfaces/order.interface";

export const ORDER_INITIAL_STATE = {
  order: {} as OrderInterface,
};

export interface OrderActionInterface {
  type: string;
  payload: OrderInterface;
}

export const orderReducer = (
  state = ORDER_INITIAL_STATE,
  action: OrderActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_ACTION_TYPES.SET_ORDER:
      return {
        ...state,
        order: payload,
      };
    default:
      return state;
  }
};