import { ReactNode } from "react";

export default interface ButtonInterface {
  children?: ReactNode;
  type: 'rounded' | 'default' | 'icon';
  width?: string;
  height?: string;
  icon?: ReactNode;
  label: string;
  labelColor?: string;
  backgroundColor?: string;
  uppercaseLabel?: boolean;
  isLoading?: boolean;
  clickHandler: () => void;
}