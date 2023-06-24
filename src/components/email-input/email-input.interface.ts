import { ReactNode } from "react";

export default interface EmailInputInterface {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  email: EmailInterface;
}

export interface EmailInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidUsername: boolean;
    isValidDomain: boolean;
    hasAt: boolean;
  };
}