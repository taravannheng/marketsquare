import { FC } from "react";

import DialogProps from "./dialog.interface";
import {
  ButtonContainerSC,
  DescriptionSC,
  DialogSC,
  TitleSC,
} from "./dialog.styles";
import Button from "../button/button.component";
import { COLORS } from "../../styles/styles";

const Dialog: FC<DialogProps> = ({
  title,
  description,
  primaryButtonLabel,
  primaryButtonHandler,
  primaryHref,
  secondaryButtonLabel,
  secondaryButtonHandler,
  open,
  isDeleteOperation,
}) => {
  return (
    <DialogSC open={open}>
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
          clickHandler={primaryButtonHandler ? primaryButtonHandler : undefined}
          href={primaryHref ? primaryHref : undefined}
          width="full"
        >
          {primaryButtonLabel}
        </Button>
        {secondaryButtonLabel && (
          <Button
            styleType="tertiary"
            clickHandler={secondaryButtonHandler}
            width="full"
          >
            {secondaryButtonLabel}
          </Button>
        )}
      </ButtonContainerSC>
    </DialogSC>
  );
};

export default Dialog;
