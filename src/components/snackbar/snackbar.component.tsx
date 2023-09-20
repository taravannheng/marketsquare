import { FC } from "react";
import _ from "lodash";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";

import SnackbarInterface from "./snackbar.interface";
import { SnackbarSC, UndoButtonSC } from "./snackbar.style";
import COLORS from "../../styles/colors";

const theme = createTheme({
  palette: {
    info: {
      main: `${COLORS.PRIMARY.P500}`,
    },
    error: {
      main: `${COLORS.RED.R500}`,
    },
    success: {
      main: `${COLORS.GREEN.G500}`,
    },
  },
});

const SnackBar: FC<SnackbarInterface> = ({
  onClose,
  open,
  type,
  children,
  message,
  onUndo,
}) => {
  const action = (
    <>
      {onUndo && (
        <UndoButtonSC color="secondary" size="small" onClick={onUndo}>
          UNDO
        </UndoButtonSC>
      )}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={onClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        {type === "info" && (
          <SnackbarSC
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
              backgroundColor: theme.palette["info"].main,
            }}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            message={message}
            action={action}
          />
        )}
        {type === "success" && (
          <SnackbarSC
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
              backgroundColor: theme.palette["success"].main,
            }}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            message={message}
            action={action}
          />
        )}
        {type === "error" && (
          <SnackbarSC
            anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
            sx={{
              backgroundColor: theme.palette["error"].main,
            }}
            open={open}
            autoHideDuration={6000}
            onClose={onClose}
            message={message}
            action={action}
          />
        )}
      </ThemeProvider>
    </>
  );
};

export default SnackBar;
