import { FC } from "react";

// props or interfaces imports
import IconButtonProps from "./icon-button.interface";

// styling imports
import { IconButtonSC } from "./icon-button.styles";
import { COLORS } from "../../styles/styles";

// util imports
import { getIconButtonIconSize } from "../../utils/helpers/misc_helpers";


const IconButton: FC<IconButtonProps> = ({
  icon,
  onClick,
  size = "large",
  isDestructive = false,
  sx,
}) => {
  let { width, height } = getIconButtonIconSize(size);

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
