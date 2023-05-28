import { ReactNode } from "react";
import OrderInterface from "../../interfaces/order.interface";

export default interface OrderDetailsInterface {
  children?: ReactNode;
  order: OrderInterface;
}