import React, { FC } from 'react';
import { Collapse } from '@mui/material';
import { CheckCircle, Info, Cancel } from '@mui/icons-material';

import AlertProps, { AlertConfig } from './alert.interface';
import { AlertSC } from './alert.style';
import COLORS from '../../styles/colors';

const alertConfigs: Record<string, AlertConfig> = {
  info: {
    icon: <Info />,
    color: COLORS.PRIMARY.P500,
    severity: 'info',
  },
  success: {
    icon: <CheckCircle />,
    color: colors.green,
    severity: 'success',
  },
  error: {
    icon: <Cancel />,
    color: colors.red,
    severity: 'error',
  },
};

const Alert: FC<AlertProps> = ({ children, type, alertVisible, setAlertVisible }) => {
  const { icon, color, severity } = alertConfigs[type] || alertConfigs.info;
  
  const closeHandler = () => {
    setAlertVisible(false);
  }

  return (
    <Collapse in={alertVisible}>
      <AlertSC 
        icon={React.cloneElement(icon, { sx: { color: `${color} !important` } })}
        onClose={closeHandler}
        severity={severity}
        role="alert"
      >
        {children}
      </AlertSC>
    </Collapse>
  );
}

export default Alert;
