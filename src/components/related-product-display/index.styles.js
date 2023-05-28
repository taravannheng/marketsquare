import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Stack, Typography } from "@mui/material";

export const RelatedProductDisplaySC = styled(Box)`
  flex: 1;
  width: clamp(100%, 100%, 100%);
`

export const TitleSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  margin-bottom: 40px !important;
`

export const StackSC = styled(Stack)`

`

export const EmptyTextSC = styled(Typography)`
  color: ${colors.darkGrey} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
`