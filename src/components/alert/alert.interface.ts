import { ReactNode } from "react";

export default interface AlertInterface {
  children: ReactNode;
  type: "success" | "error" | "info";
  alertVisible: boolean;
  setAlertVisible: (value: boolean) => void;
}