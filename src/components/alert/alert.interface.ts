import { ReactNode } from "react";

export default interface AlertProps {
  children: ReactNode;
  type: "success" | "error" | "info";
  alertVisible: boolean;
  setAlertVisible: (value: boolean) => void;
  hideCloseButton?: boolean;
}

export interface AlertConfig {
  icon: React.ReactElement;
  iconColor: string;
  textColor: string;
  backgroundColor: string;
  borderColor: string;
  severity: 'info' | 'success' | 'error';
}