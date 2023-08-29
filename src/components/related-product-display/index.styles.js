import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Stack, Typography } from "@mui/material";

export const RelatedProductDisplaySC = styled(Box)`
  flex: 1;
  width: clamp(100%, 100%, 100%);
`

export const TitleSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
  margin-bottom: 40px !important;
`

export const StackSC = styled(Stack)`

`

export const EmptyTextSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
`