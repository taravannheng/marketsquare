import { ReactNode } from "react";

import ReviewInterface from "../review/index.interface";

export default interface ReviewDisplayInterface {
  children?: ReactNode;
  reviews: ReviewInterface[] | null;
  productID: string;
}
