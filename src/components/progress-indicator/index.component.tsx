import { FC } from 'react'
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";

import ProgressIndicatorInterface from './index.interface';
import COLORS from '../../styles/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: `${colors.primary}`,
    },
  },
});

const ProgressIndicator: FC<ProgressIndicatorInterface> = ({ size = 40 }) => {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress color='primary' size={ size } />
    </ThemeProvider>
  )
}

export default ProgressIndicator