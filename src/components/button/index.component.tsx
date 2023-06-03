import { FC } from "react";
import _ from "lodash";

import ButtonInterface from "./index.interface";
import { ButtonSC, RoundedButtonSC, IconButtonSC } from "./index.styles";
import { Box, Typography } from "@mui/material";
import ProgressIndicator from "../progress-indicator/index.component";
import typography from "../../styles/typography";

const Button: FC<ButtonInterface> = ({
  type,
  label,
  labelColor,
  backgroundColor,
  uppercaseLabel,
  width,
  height,
  icon,
  isLoading = false,
  boldLabel = false,
  clickHandler,
}) => {
  return (
    <>
      {type === "default" && (
        <ButtonSC
          sx={{
            fontSize: `${boldLabel && typography.h5.fontSize} !important`,
            fontWeight: `${boldLabel && typography.h5.fontWeight} !important`,
            width: `${width && width} !important`,
            height: `${height && height} !important`,
            textTransform: `${
              uppercaseLabel ? "uppercase !important" : "none !important"
            }`,
            color: `${labelColor && labelColor} !important`,
            backgroundColor: `${backgroundColor && backgroundColor} !important`,
          }}
          onClick={clickHandler}
        >
          {isLoading && <ProgressIndicator size={24} />}
          {!isLoading && label}
        </ButtonSC>
      )}
      {type === "rounded" && (
        <RoundedButtonSC
          sx={{
            fontSize: `${boldLabel && typography.h5.fontSize} !important`,
            fontWeight: `${boldLabel && typography.h5.fontWeight} !important`,
            width: `${width && width} !important`,
            height: `${height && height} !important`,
            textTransform: `${
              uppercaseLabel ? "uppercase !important" : "none !important"
            }`,
            color: `${labelColor && labelColor} !important`,
            backgroundColor: `${backgroundColor && backgroundColor} !important`,
          }}
          onClick={clickHandler}
        >
          {label}
        </RoundedButtonSC>
      )}
      {type === "icon" && (
        <IconButtonSC
          sx={{
            width: `${width && width} !important`,
            height: `${height && height} !important`,
            textTransform: `${
              uppercaseLabel ? "uppercase !important" : "none !important"
            }`,
            color: `${labelColor && labelColor} !important`,
            backgroundColor: `${backgroundColor && backgroundColor} !important`,
          }}
          onClick={clickHandler}
        >
          {icon}
          {label}
        </IconButtonSC>
      )}
    </>
  );
};

export default Button;
