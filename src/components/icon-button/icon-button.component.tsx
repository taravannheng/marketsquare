import { FC } from "react";

import { IconButtonSC } from "./icon-button.styles";
import IconButtonProps from "./icon-button.interface";

import { COLORS } from "../../styles/styles";

const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  size = "large",
  isDestructive = false,
  sx,
}) => {
  let width, height;

  switch (size) {
    case "small":
      width = "24px";
      height = "24px";
      break;
    case "medium":
      width = "32px";
      height = "32px";
      break;
    case "large":
      width = "44px";
      height = "44px";
      break;
    default:
      width = "44px";
      height = "44px";
      break;
  }

  return (
    <IconButtonSC
      onClick={onClick}
      sx={{
        ...sx,
        width,
        height,
        "&:hover": {
          color: `${
            isDestructive ? COLORS.RED.R500 : COLORS.PRIMARY.P500
          } !important`,
        },
      }}
    >
      {icon}
    </IconButtonSC>
  );
};

export default IconButton;
