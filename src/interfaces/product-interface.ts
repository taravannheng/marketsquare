import { ReactNode } from "react";

export default interface ProductInterface {
  _id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  stripeID: string,
  imgUrls: string[];
  rating: number;
  reviews: Review[];
}

export interface Review {
  avatarUrl: string;
  reviewer: string;
  rating: number;
  comment: string;
}
