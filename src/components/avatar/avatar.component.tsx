import { FC } from "react";

import AvatarProps from "./avatar.interface";
import { AvatarSC } from "./avatar.style";

const getSize = (size: string): string => {
  const sizes: Record<string, string> = {
    small: "28px",
    medium: "32px",
    large: "44px"
  };
  
  return sizes[size] || "32px";
};

const Avatar: FC<AvatarProps> = ({
  size = "small",
  src,
  alt,
  clickHandler,
  children,
}) => {
  const commonProps = {
    onClick: clickHandler,
    sx: {
      width: getSize(size),
      height: getSize(size),
    },
  };
  
  return (
    <AvatarSC {...commonProps} alt={src ? alt : undefined} src={src || undefined}>
      {!src && children}
    </AvatarSC>
  );
};

export default Avatar;
