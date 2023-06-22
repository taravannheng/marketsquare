import { ReactNode } from "react";

export default interface RatingInterface {
  children?: ReactNode;
  type: 'short' | 'long';
  showLabel?: boolean;
  rating?: number;
}