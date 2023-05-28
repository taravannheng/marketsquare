import { ReactNode } from "react";

export default interface ReviewInterface {
  children?: ReactNode;
  avatarUrl: string;
  reviewer: string;
  comment: string;
  rating: number;
  width?: string;
  height?: string;
}