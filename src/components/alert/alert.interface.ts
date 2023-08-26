import { ReactNode } from "react";

export default interface AlertProps {
  children: ReactNode;
  type: "success" | "error" | "info";
  alertVisible: boolean;
  setAlertVisible: (value: boolean) => void;
}

export interface AlertConfig {
  icon: React.ReactElement;
  color: string;
  severity: 'info' | 'success' | 'error';
}