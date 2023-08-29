import styled from "@emotion/styled";
import { Button, Snackbar } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import spacing from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";
import shadows from "../../styles/shadows";

export const SnackbarSC = styled(Snackbar)`
  & > div {
    background-color: transparent;
    box-shadow: ${shadows.large.rounded} !important;
  }
`;

export const UndoButtonSC = styled(Button)`
  color: ${COLORS.NEUTRAL.N0} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`;