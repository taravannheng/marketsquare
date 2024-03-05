import { ReactNode } from "react";
import OrderInterface from "../../interfaces/order.interface";

export default interface OrderDetailsProps {
  children?: ReactNode;
  order: OrderInterface;
}