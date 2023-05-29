import { FC } from 'react'
import { CircularProgress } from '@mui/material'
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#758AE3",
    },
  },
});

const ProgressIndicator: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CircularProgress color='primary' />
    </ThemeProvider>
  )
}

export default ProgressIndicator