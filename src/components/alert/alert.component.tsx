import { FC } from 'react';
import { Collapse } from '@mui/material';
import { CheckCircle, Info, Cancel } from '@mui/icons-material';

import AlertInterface from './alert.interface';
import { AlertSC } from './alert.style';
import colors from '../../styles/colors';

const Alert: FC<AlertInterface> = ({ children, type, alertVisible, setAlertVisible }) => {
  const closeHandler = () => {
    setAlertVisible(false);
  }

  return (
    <Collapse in={alertVisible}>
      {type === 'info' && <AlertSC icon={<Info sx={{ color: `${colors.primary} !important` }} />} onClose={closeHandler} severity="info">{children}</AlertSC>}
      {type === 'success' && <AlertSC icon={<CheckCircle sx={{ color: `${colors.green} !important` }} />} onClose={closeHandler} severity="success">{children}</AlertSC>}
      {type === 'error' && <AlertSC icon={<Cancel sx={{ color: `${colors.red} !important` }} />} onClose={closeHandler} severity="error">{children}</AlertSC>}
    </Collapse>
  )
}

export default Alert