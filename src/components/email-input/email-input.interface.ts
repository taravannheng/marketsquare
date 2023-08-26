import { ReactNode } from "react";

export default interface EmailInputProps {
  children?: ReactNode;
  className?: string;
  disabled?: boolean;
  id?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  email: EmailInterface;
  isRequired?: boolean;
  isUnique?: boolean;
  checkUniqueness?: boolean;
  showTooltip?: boolean;
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