import USER_ACTION_TYPES from "./user.types";
import UserInterface from "../../interfaces/user.interface";

export const USER_INITIAL_STATE = {
  user: null,
};

export interface UserActionInterface {
  type: string;
  payload: UserInterface;
}

export const userReducer = (
  state = USER_INITIAL_STATE,
  action: UserActionInterface
) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};