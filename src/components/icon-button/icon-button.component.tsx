import { FC } from "react";

import { IconButtonSC } from "./icon-button.styles";
import IconButtonProps from "./icon-button.interface";

const IconButton: FC<IconButtonProps> = ({ icon, clickHandler, size = 'large' }) => {
  let width, height;

  switch (size) {
    case 'small':
      width = '24px';
      height = '24px';
      break;
    case 'medium':
      width = '32px';
      height = '32px';
      break;
    case 'large':
      width = '44px';
      height = '44px';
      break;
    default:
      width = '44px';
      height = '44px';
      break;
  }

  return <IconButtonSC onClick={clickHandler} sx={{
    width, height
  }}>{icon}</IconButtonSC>;
};

export default IconButton;
