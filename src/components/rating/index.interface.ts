import { ReactNode } from "react";

export default interface RatingInterface {
  children?: ReactNode;
  showLabel?: boolean;
  rating?: number;
}