import { FC } from "react";
import _ from "lodash";

import AvatarInterface from "./avatar.interface";
import { AvatarSC } from "./avatar.style";

const getSize = (size: string) => {
  switch (size) {
    case "small":
      return "40px";
    case "medium":
      return "48px";
    case "large":
      return "56px";
    default:
      return "30px";
  }
};

const Avatar: FC<AvatarInterface> = ({
  size = "small",
  src,
  alt,
  clickHandler,
  children,
}) => {
  return (
    <>
      {!_.isEmpty(src) && (
        <AvatarSC
          onClick={clickHandler}
          alt={alt}
          src={src}
          sx={{ width: `${getSize(size)}`, height: `${getSize(size)}` }}
        />
      )}
      {_.isEmpty(src) && (
        <AvatarSC
          onClick={clickHandler}
          sx={{ width: `${getSize(size)}`, height: `${getSize(size)}` }}
        >
          {children}
        </AvatarSC>
      )}
    </>
  );
};

export default Avatar;
