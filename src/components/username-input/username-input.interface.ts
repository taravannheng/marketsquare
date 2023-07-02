import { ReactNode } from "react";

export default interface UsernameInputInterface {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  username: UsernameInterface;
  isRequired?: boolean;
}

export interface UsernameInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidLength: boolean;
    isValidCharacters: boolean;
    hasNoSpaces: boolean;
  };
}