import { ReactNode } from "react";

export default interface ReviewProps {
  children?: ReactNode;
  _id?: string;
  profileUrl: string | null;
  userID: string | null;
  username: string | null;
  comment: string;
  rating: number;
  width?: string;
  height?: string;
}