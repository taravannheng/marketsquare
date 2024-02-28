import React, { FC } from "react";

// 3rd-party dependencies imports
import { Collapse } from "@mui/material";
import { CheckCircle, Info, Cancel } from "@mui/icons-material";

// props or interfaces imports
import AlertProps, { AlertConfig } from "./alert.interface";

// styling imports
import { AlertSC } from "./alert.style";
import COLORS from "../../styles/colors";

const alertConfigs: Record<string, AlertConfig> = {
  info: {
    icon: <Info />,
    iconColor: COLORS.PRIMARY.P500,
    textColor: COLORS.PRIMARY.P600,
    backgroundColor: COLORS.PRIMARY.P50,
    borderColor: COLORS.PRIMARY.P200,
    severity: "info",
  },
  success: {
    icon: <CheckCircle />,
    iconColor: COLORS.GREEN.G400,
    textColor: COLORS.GREEN.G700,
    backgroundColor: COLORS.GREEN.G50,
    borderColor: COLORS.GREEN.G200,
    severity: "success",
  },
  error: {
    icon: <Cancel />,
    iconColor: COLORS.RED.R500,
    textColor: COLORS.RED.R700,
    backgroundColor: COLORS.RED.R50,
    borderColor: COLORS.RED.R200,
    severity: "error",
  },
};

const Alert: FC<AlertProps> = ({
  children,
  type,
  alertVisible,
  setAlertVisible,
  hideCloseButton,
}) => {
  const { icon, iconColor, textColor, backgroundColor, borderColor, severity } =
    alertConfigs[type] || alertConfigs.info;

  const closeHandler = () => {
    setAlertVisible(false);
  };

  return (
    <Collapse in={alertVisible}>
      <AlertSC
        icon={React.cloneElement(icon, {
          sx: { color: `${iconColor} !important` },
        })}
        onClose={hideCloseButton ? undefined : closeHandler}
        severity={severity}
        role="alert"
        sx={{
          color: textColor,
          backgroundColor,
          borderColor,
        }}
      >
        {children}
      </AlertSC>
    </Collapse>
  );
};

export default Alert;
