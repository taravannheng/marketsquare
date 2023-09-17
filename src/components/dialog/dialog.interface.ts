interface DialogProps {
  title: string;
  description: string;
  primaryButtonLabel: string;
  primaryButtonHandler: () => void;
  secondaryButtonLabel?: string;
  secondaryButtonHandler?: () => void;
  open: boolean;
  isDeleteOperation?: boolean;
}

export default DialogProps;