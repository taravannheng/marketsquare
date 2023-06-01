import styled from "styled-components";
import { Grid, Typography, Box, Stack } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const ProductsDisplaySC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  flex: 1;
  padding: 48px 24px 80px 24px !important;
  margin: 0 !important;

  @media only screen and (min-width: 1080px) {
    padding: 80px 48px !important;
  }
`

export const SlideShowContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  height: clamp(240px, 240px, 240px);
  margin-bottom: 24px !important;

  @media only screen and (min-width: 624px) {
    width: clamp(100%, 100%, 100%);
    height: clamp(400px, 400px, 400px);
    margin-bottom: 48px !important;
  }

  @media only screen and (min-width: 1080px) {
    width: clamp(100%, 100%, 100%);
    height: clamp(640px, 640px, 640px);
    margin-bottom: 80px !important;
  }
`

export const ProductsDisplayTitleSC = styled(Typography)`
  margin-bottom: 32px !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.h2.fontSize} !important;
  font-weight: ${typography.h2.fontWeight} !important;
  font-family: ${typography.h2.fontFamily} !important;

  @media only screen and (min-width: 640px) {
    font-size: ${typography.h1.fontSize} !important;
    font-weight: ${typography.h1.fontWeight} !important;
    font-family: ${typography.h1.fontFamily} !important;
  }
`

export const ProductsDisplayEmptyTextSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
`

export const PaginationStackSC = styled(Stack)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`