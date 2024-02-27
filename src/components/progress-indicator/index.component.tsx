import { FC } from 'react'
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ProgressIndicatorProps from './index.interface';
import COLORS from '../../styles/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: `${COLORS.PRIMARY.P500}`,
    },
    secondary: {
      main: `${COLORS.NEUTRAL.N0}`,
    }
  },
});

const ProgressIndicator: FC<ProgressIndicatorProps> = ({ size = 40, color = "primary" }) => {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress color={color} size={ size } />
    </ThemeProvider>
  )
}

export default ProgressIndicator