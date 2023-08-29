import styled from "@emotion/styled";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Stack, Typography } from "@mui/material";

export const OrderSummarySC = styled(Box)`
  width: clamp(100%, 100%, 100%);
`;

export const ContentSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
`;

export const TitleSC = styled(Typography)`
  margin-bottom: 16px;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;

  @media only screen and (min-width: 800px) {
    display: none;
  }
`;

export const ProductStackSC = styled(Stack)`
  margin-bottom: 40px;
`;

export const TotalTextSC = styled(Typography)`
  display: flex;
  align-items: center;
  color: ${colors.dark} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
`;

export const TotalAmountSC = styled(Typography)`
  margin-left: 24px;
  color: ${COLORS.PRIMARY.P500} !important;
  font-size: ${typography.h2.fontSize} !important;
  font-weight: ${typography.h2.fontWeight} !important;

  @media only screen and (min-width: 1080px) {
    margin-left: 36px;
  }
`;

export const EmptyContentSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`;