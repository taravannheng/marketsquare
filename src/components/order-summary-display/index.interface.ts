import { ReactNode } from "react";
import OrderInterface from "../../interfaces/order.interface";

export default interface OrderSummaryDisplayProps extends OrderInterface {
  children?: ReactNode;
}