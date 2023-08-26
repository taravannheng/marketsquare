import { FC } from "react";

import AvatarInterface from "./avatar.interface";
import { AvatarSC } from "./avatar.style";

const getSize = (size: string): string => {
  const sizes: Record<string, string> = {
    small: "40px",
    medium: "48px",
    large: "56px"
  };
  
  return sizes[size] || "30px";
};

const Avatar: FC<AvatarInterface> = ({
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
