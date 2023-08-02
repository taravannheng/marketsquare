import { ReactNode } from "react";

export default interface ButtonInterface {
  children?: ReactNode;
  styleType: 'rounded' | 'default' | 'icon';
  actionType: 'submit' | 'button';
  width?: string;
  height?: string;
  icon?: ReactNode;
  label: string;
  labelColor?: string;
  backgroundColor?: string;
  uppercaseLabel?: boolean;
  isLoading?: boolean;
  boldLabel?: boolean;
  clickHandler?: (() => void) | ((event: any) => Promise<void>);
}