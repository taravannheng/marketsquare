import { ReactNode } from "react";

import ReviewInterface from "../review/review.interface";

export default interface ReviewDisplayProps {
  children?: ReactNode;
  reviews: ReviewInterface[] | null;
  productID: string;
}
