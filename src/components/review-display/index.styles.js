import styled from "styled-components";
import { Box, Stack, Typography } from "@mui/material";

import { space, COLORS, typography } from '../../styles/styles';

export const ReviewDisplaySC = styled(Box)``;

export const TitleSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
  margin-bottom: 40px !important;
`;

export const EmptyTextSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
`;

export const ReviewTitleSC = styled(Typography)`
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  margin-bottom: ${space.l} !important;
`;

export const ReviewStackSC = styled(Stack)``;
