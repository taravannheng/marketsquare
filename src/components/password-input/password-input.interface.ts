import { ReactNode } from "react";

export interface PasswordInputInterface {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  label?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  password: PasswordInterface;
  isRequired?: boolean;
}

export interface PasswordInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidLength: boolean;
    hasUppercaseLetter: boolean;
    hasLowercaseLetter: boolean;
    hasNumber: boolean;
    hasSpecialCharacter: boolean;
    hasNoSpaces: boolean;
  };
}