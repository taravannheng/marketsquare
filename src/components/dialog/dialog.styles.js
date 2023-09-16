import styled, { css } from "styled-components";
import {
  Box,
  Dialog, DialogTitle, Typography,
} from "@mui/material";

import { COLORS, typography, borderRadius, space } from "../../styles/styles";

// SHARED STYLES -------------------------------------------------------



// COMPONENT STYLES -------------------------------------------------------

export const DialogSC = styled(Dialog)`
  & .MuiDialog-paper {
    border-radius: ${borderRadius.s} !important;
    padding: ${space.l} ${space.m} !important;
  }
`;

export const TitleSC = styled(DialogTitle)`
  text-align: center !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  margin: 0 0 ${space.l} 0 !important;
  padding: 0 !important;
`;

export const DescriptionSC = styled(Typography)`
  text-align: left !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  margin: 0 0 ${space.xl} 0 !important;
`;

export const ButtonContainerSC = styled(Box)`
  & > button:first-child {
    margin-bottom: ${space.m} !important;
  }

  & > button:last-child {
    color: ${COLORS.NEUTRAL.N500} !important;

    &:hover {
      color: ${COLORS.NEUTRAL.N900} !important;
    }
  }
`;
