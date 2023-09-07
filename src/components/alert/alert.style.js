import styled from "@emotion/styled";
import { Alert } from "@mui/material";

import { COLORS, typography, space, borderRadius } from "../../styles/styles";

export const AlertSC = styled(Alert)`
  padding: ${space.xs} ${space.m} !important;
  border-radius: ${borderRadius.s};

  .MuiAlert-message {
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
    line-height: ${typography.body1.lineHeight} !important;
  }

  & button {
    color: ${COLORS.NEUTRAL.N300} !important;
    width: clamp(24px, 24px, 24px) !important;
    height: clamp(24px, 24px, 24px) !important;
    transition: all 0.3s ease-in-out !important;

    &:hover {
      color: ${COLORS.RED.R500} !important;
      background-color: transparent !important;
    }
  }
`;