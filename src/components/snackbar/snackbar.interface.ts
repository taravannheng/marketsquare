import { ReactNode } from "react";

export default interface SnackbarProps {
  children?: ReactNode;
  open: boolean;
  onClose: () => void;
  onUndo?: () => void;
  type: "success" | "error" | "info";
  message: string;
}