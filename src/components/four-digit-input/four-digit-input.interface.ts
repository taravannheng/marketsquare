import { ReactNode } from "react";

export default interface FourDigitInputProps {
  children?: ReactNode;
  values: string[];
  onChange: (index: number, value: string) => void;
  refs: React.RefObject<HTMLInputElement>[];
}