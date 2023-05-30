import { FC } from 'react'
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProgressIndicatorInterface from './index.interface';

const theme = createTheme({
  palette: {
    primary: {
      main: "#758AE3",
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