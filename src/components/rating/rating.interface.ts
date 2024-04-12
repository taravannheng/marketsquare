import { ReactNode } from "react";

export default interface RatingProps {
  children?: ReactNode;
  type: 'short' | 'long';
  showLabel?: boolean;
  rating?: number;
}