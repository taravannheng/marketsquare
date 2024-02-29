import { FC } from "react";
import { createPortal } from "react-dom";

// component imports
import Button from "../button/button.component";

// props or interfaces imports
import DialogProps from "./dialog.interface";

// styling imports
import {
  ButtonContainerSC,
  DescriptionSC,
  DialogSC,
  IconSC,
  TitleSC,
} from "./dialog.styles";
import { COLORS } from "../../styles/styles";

const Dialog: FC<DialogProps> = ({
  title,
  description,
  primaryButtonLabel,
  onClickPrimaryButton,
  primaryHref,
  secondaryButtonLabel,
  onClickSecondaryButton,
  open,
  isDeleteOperation,
  icon,
}) => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return null; // or handle the error
  }

  return createPortal(
    <DialogSC open={open}>
      {icon && <IconSC>{icon}</IconSC>}
      <TitleSC>{title}</TitleSC>
      <DescriptionSC>{description}</DescriptionSC>
      <ButtonContainerSC
        sx={{
          "& > button:first-child": {
            backgroundColor: isDeleteOperation
              ? `${COLORS.RED.R500} !important`
              : `${COLORS.PRIMARY.P500} !important`,
          },
          "& > button:first-child:hover": {
            backgroundColor: isDeleteOperation
              ? `${COLORS.RED.R600} !important`
              : `${COLORS.PRIMARY.P600} !important`,
          },
          "& > button:first-child:active": {
            backgroundColor: isDeleteOperation
              ? `${COLORS.RED.R700} !important`
              : `${COLORS.PRIMARY.P700} !important`,
          },
        }}
      >
        <Button
          onClick={onClickPrimaryButton ? onClickPrimaryButton : undefined}
          href={primaryHref ? primaryHref : undefined}
          width="full"
        >
          {primaryButtonLabel}
        </Button>
        {secondaryButtonLabel && (
          <Button
            styleType="tertiary"
            onClick={onClickSecondaryButton}
            width="full"
          >
            {secondaryButtonLabel}
          </Button>
        )}
      </ButtonContainerSC>
    </DialogSC>, rootElement
  );
};

export default Dialog;
