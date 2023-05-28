import { ReactNode } from "react";
import OrderInterface from "../../interfaces/order.interface";

export default interface OrderSummaryDisplayInterface extends OrderInterface {
  children?: ReactNode;
}