import styled from "styled-components";
import { Box, CardMedia, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const ProductCategorySC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  height: clamp(200px, 200px, 200px);  
  border-radius: 16px !important;
  margin-top: 80px;
  margin-bottom: 120px;

  @media only screen and (min-width: 640px) {
    height: clamp(400px, 400px, 400px);  
  }

  @media only screen and (min-width: 1080px) {
    height: clamp(640px, 640px, 640px);  
    margin-top: 120px;
  }
`

export const TitleSC = styled(Typography)`
  margin-bottom: 32px !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.h2.fontSize} !important;
  font-weight: ${typography.h2.fontWeight} !important;

  @media only screen and (min-width: 640px) {
    font-size: ${typography.h1.fontSize} !important;
    font-weight: ${typography.h1.fontWeight} !important;
  }
`

export const ProductContainerSC = styled(Box)`
  display: flex;
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);
  overflow: hidden;
  border-radius: 16px !important;
`

export const LeftContainerSC = styled(Box)`
  flex: 0 0 50%;
`

export const RightContainerSC = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
`

export const LeftContainerContentSC = styled(CardMedia)`
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);
`

export const RightContainerTopContentSC = styled(CardMedia)`
  flex: 0 0 50%;
`

export const RightContainerBottomContentSC = styled(CardMedia)`
  flex: 0 0 50%;
`