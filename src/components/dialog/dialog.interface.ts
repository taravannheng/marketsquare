import { ReactNode } from "react";

interface DialogProps {
  title: string;
  description: string;
  primaryButtonLabel: string;
  onClickPrimaryButton?: () => void;
  primaryHref?: string;
  secondaryButtonLabel?: string;
  onClickSecondaryButton?: () => void;
  open: boolean;
  icon?: ReactNode;
  isDeleteOperation?: boolean;
}

export default DialogProps;