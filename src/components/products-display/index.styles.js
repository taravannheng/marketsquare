import styled from "styled-components";
import { Grid, Typography, Box, Stack } from "@mui/material";

import { COLORS, typography, space } from "../../styles/styles";

export const ProductsDisplaySC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  flex: 1;
  padding: 0 0 ${space.xxxl} 0 !important;
  margin: 0 !important;

  @media only screen and (min-width: 1080px) {
    padding: 0 ${space.xxl} ${space.xxl} ${space.xxl} !important;
  }
`

export const SlideShowContainerSC = styled(Box)`
  margin-bottom: ${space.l} !important;

  @media only screen and (min-width: 624px) {
    margin-bottom: ${space.xxl} !important;
  }

  @media only screen and (min-width: 1080px) {
    margin-bottom: ${space.xxxl} !important;
  }
`

export const TitleContainerSC = styled(Box)`
  display: flex;
  flex-direction: row; 
  justify-content: space-between; 
  align-items: center !important;
  padding: 0 ${space.l} !important;
  margin-top: ${space.xxl} !important;
  margin-bottom: ${space.m} !important;
`;

export const ProductsDisplayTitleSC = styled(Typography)`
  margin-bottom: 0px !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;

  @media only screen and (min-width: 640px) {
    font-size: ${typography.h3.fontSize} !important;
    font-weight: ${typography.h3.fontWeight} !important;
  }
`

export const ProductsDisplayEmptyTextSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
`

export const PaginationStackSC = styled(Stack)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`