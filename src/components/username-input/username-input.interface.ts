import { ReactNode } from "react";

import UsernameInterface from "../../interfaces/username.interface";

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
  showTooltip?: boolean;
}