import { FC } from "react";
import _ from "lodash";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";

import SnackbarInterface from "./snackbar.interface";
import { SnackbarSC, UndoButtonSC } from "./snackbar.style";
import COLORS from "../../styles/colors";

const SnackBar: FC<SnackbarInterface> = ({
  onClose,
  open,
  type,
  children,
  message,
  onUndo,
}) => {
  let backgroundColor = "";

  switch (type) {
    case "info":
      backgroundColor = COLORS.PRIMARY.P500;
      break;
    case "error":
      backgroundColor = COLORS.RED.R500;
      break;
    case "success":
      backgroundColor = COLORS.GREEN.G500;
      break;
    default:
      backgroundColor = COLORS.PRIMARY.P500;
      break;
  }

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
      <SnackbarSC
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        sx={{
          backgroundColor: `${backgroundColor} !important`,
        }}
        open={open}
        autoHideDuration={3000}
        onClose={onClose}
        message={message}
        action={action}
      />
    </>
  );
};

export default SnackBar;
