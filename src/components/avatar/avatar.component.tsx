import { FC } from "react";

// interface imports
import AvatarProps from "./avatar.interface";

// styling imports
import { AvatarSC } from "./avatar.style";

// util imports
import { getAvatarSize } from "../../utils/helpers/misc_helpers.js";

const Avatar: FC<AvatarProps> = ({
  size = "small",
  src,
  alt,
  onClick,
  children,
}) => {
  const commonProps = {
    onClick: onClick,
    sx: {
      width: getAvatarSize(size),
      height: getAvatarSize(size),
    },
  };
  
  return (
    <AvatarSC {...commonProps} alt={src ? alt : undefined} src={src || undefined}>
      {!src && children}
    </AvatarSC>
  );
};

export default Avatar;
