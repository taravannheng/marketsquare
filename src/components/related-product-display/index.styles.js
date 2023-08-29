import styled from "styled-components";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Stack, Typography } from "@mui/material";

export const RelatedProductDisplaySC = styled(Box)`
  flex: 1;
  width: clamp(100%, 100%, 100%);
`

export const TitleSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
  margin-bottom: 40px !important;
`

export const StackSC = styled(Stack)`

`

export const EmptyTextSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N500} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`