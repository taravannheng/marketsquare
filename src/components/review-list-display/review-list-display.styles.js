import styled from "styled-components";
import {
  Box,
  Icon,
  Typography,
} from "@mui/material";

import {
  COLORS,
  typography,
  space,
  BREAKPOINTS,
} from "../../styles/styles";

// SHARED STYLES ---------------------------------------------------------------

// COMPONENT STYLES ---------------------------------------------------------------

export const ReviewListDisplaySC = styled(Box)`
  width: 100% !important;
  padding: ${space.xxl} ${space.l} ${space.xxxxl} ${space.l} !important;
  margin: 0 auto;

  @media only screen and (min-width: ${BREAKPOINTS.md}px) {
    width: 50% !important;
  }
`;

export const TitleSC = styled(Typography)`
  text-align: center !important;
  margin-bottom: ${space.xxl} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;

  @media only screen and (min-width: ${BREAKPOINTS.md}px) {
    margin-bottom: ${space.xxl} !important;
  }
`;

export const ProgressIndicatorContainerSC = styled(Box)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const ReviewListEmptySC = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  margin-top: ${space.xxl} !important;
`;

export const ReviewListEmptyIconSC = styled(Icon)`
  color: ${COLORS.NEUTRAL.N200} !important;
  width: clamp(80px, 80px, 80px) !important;
  height: clamp(80px, 80px, 80px) !important;
  margin-bottom: ${space.m} !important;
  
  & > svg {
    width: clamp(80px, 80px, 80px) !important;
    height: clamp(80px, 80px, 80px) !important;
  }
`;

export const ReviewListEmptyDescriptionSC = styled(Typography)`
  width: 50% !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  text-align: center;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  margin-bottom: ${space.xl} !important;
`;
