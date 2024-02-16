import { ReactNode } from "react";

import PasswordInterface from "../../interfaces/password.interface";

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
  showTooltip?: boolean;
  showIcon?: boolean;
}