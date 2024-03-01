import { FC } from "react";

// props or interfaces imports
import AvatarProps from "./avatar.interface";

// styling imports
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
  onClick,
  children,
}) => {
  const commonProps = {
    onClick: onClick,
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
