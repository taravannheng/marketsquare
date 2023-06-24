import styled from "@emotion/styled";
import { Alert } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const AlertSC = styled(Alert)`
  padding: 8px 16px !important;
  background-color: ${colors.light};
  border-radius: ${borderRadius.s};

  .MuiAlert-message {
    font-size: ${typography.body.fontSize} !important;
    font-weight: ${typography.body.fontWeight} !important;
    line-height: ${typography.body.lineHeight} !important;
    color: ${colors.darkest} !important;
  }

  & button {
    color: ${colors.darkest} !important;
    width: clamp(24px, 24px, 24px) !important;
    height: clamp(24px, 24px, 24px) !important;
    transition: all 0.3s ease-in-out !important;

    &:hover {
      color: ${colors.lightest} !important;
      background-color: ${colors.red} !important;
    }
  }
`;