import styled from "@emotion/styled";
import { Alert } from "@mui/material";

import { colors, typography, space, borderRadius } from "../../styles/styles";

export const AlertSC = styled(Alert)`
  padding: ${space.xs} ${space.m} !important;
  background-color: ${COLORS.NEUTRAL.N50};
  border-radius: ${borderRadius.s};

  .MuiAlert-message {
    font-size: ${typography.body.fontSize} !important;
    font-weight: ${typography.body.fontWeight} !important;
    line-height: ${typography.body.lineHeight} !important;
    color: ${COLORS.NEUTRAL.N900} !important;
  }

  & button {
    color: ${COLORS.NEUTRAL.N900} !important;
    width: clamp(24px, 24px, 24px) !important;
    height: clamp(24px, 24px, 24px) !important;
    transition: all 0.3s ease-in-out !important;

    &:hover {
      color: ${COLORS.NEUTRAL.N0} !important;
      background-color: ${COLORS.RED.R500} !important;
    }
  }
`;