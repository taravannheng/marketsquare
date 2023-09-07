import styled from "styled-components";
import { Grid, Typography, Box, Stack } from "@mui/material";

import { COLORS, typography, space } from "../../styles/styles";

export const ProductsDisplaySC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  flex: 1;
  padding: ${space.l} ${space.l} ${space.xxxl} ${space.l} !important;
  margin: 0 !important;

  @media only screen and (min-width: 1080px) {
    padding: ${space.xxl} ${space.xxl} !important;
  }
`

export const SlideShowContainerSC = styled(Box)`
  margin-top: ${space.l} !important;
  margin-bottom: ${space.l} !important;

  @media only screen and (min-width: 640px) {
    margin-top: 0px !important;
  }

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
  margin-bottom: ${space.xl} !important;
`;

export const ProductsDisplayTitleSC = styled(Typography)`
  margin-bottom: 0px !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;

  @media only screen and (min-width: 640px) {
    font-size: ${typography.h2.fontSize} !important;
    font-weight: ${typography.h2.fontWeight} !important;
  }

  @media only screen and (min-width: 960px) {
    margin-bottom: 0px !important;
    font-size: ${typography.h1.fontSize} !important;
    font-weight: ${typography.h1.fontWeight} !important;
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