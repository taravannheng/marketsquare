import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Stack, Typography } from "@mui/material";

export const ReviewDisplaySC = styled(Box)``;

export const TitleSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  margin-bottom: 40px !important;
`;

export const EmptyTextSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
`;

export const ReviewStackSC = styled(Stack)``;
