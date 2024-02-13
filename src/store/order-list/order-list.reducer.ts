import ORDER_LIST_ACTION_TYPES from "./order-list.types";
import OrderListItemInterface from "../../interfaces/order-list-item.interface";
import _ from "lodash";

export const ORDER_LIST_INITIAL_STATE = {
  orderList: [] as OrderListItemInterface[],
};

export interface OrderListActionInterface {
  type: string;
  payload: OrderListItemInterface[] | OrderListItemInterface;
}

export const orderListReducer = (
  state = ORDER_LIST_INITIAL_STATE,
  action: OrderListActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case ORDER_LIST_ACTION_TYPES.ADD_ORDERS:
      const uniqueOrders = _.differenceBy(payload as OrderListItemInterface[], state.orderList, "_id");
      return { ...state, orderList: [...state.orderList, ...uniqueOrders]};
    case ORDER_LIST_ACTION_TYPES.ADD_ORDER:
      return {
        ...state,
        orderList: [...state.orderList, payload as OrderListItemInterface],
      };
    case ORDER_LIST_ACTION_TYPES.UPDATE_ORDER:
      return {
        ...state,
        orderList: state.orderList.map((order) =>
          order._id === (payload as OrderListItemInterface)._id ? payload : order
        ),
      };
    case ORDER_LIST_ACTION_TYPES.DELETE_ORDER:
      return {
        ...state,
        orderList: state.orderList.filter(
          (order) => order._id !== (payload as OrderListItemInterface)._id
        ),
      };
    case ORDER_LIST_ACTION_TYPES.CLEAR_ORDERS:
      return { ...state, orderList: [] };
    default:
      return state;
  }
};
