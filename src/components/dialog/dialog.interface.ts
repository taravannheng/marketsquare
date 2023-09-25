import { ReactNode } from "react";

interface DialogProps {
  title: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHandler?: () => void;
  primaryHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHandler?: () => void;
  open: boolean;
  icon?: ReactNode;
  isDeleteOperation?: boolean;
}

export default DialogProps;