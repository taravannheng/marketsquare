import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import { COLORS, typography, space } from '../../styles/styles';

export const ProductDetailsDisplaySC = styled(Box)`
  padding: ${space.l} !important;
  
  @media only screen and (min-width: 1080px) {
    padding: ${space.xxl} !important;
  }
`

export const BackNavSC = styled(Box)`
  margin-bottom: ${space.xl} !important;
`

export const BodySC = styled(Box)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
  }
`

export const SlideShowContainerSC = styled(Box)`  
  width: clamp(100%, 100%, 100%);
  margin-bottom: ${space.xl};
  overflow: hidden;
`

export const DetailsContainerSC = styled(Box)`
  width: 100%;

  @media only screen and (min-width: 1080px) {
    padding-left: ${space.xxxl} !important;
  }
`

export const ProductNameSC = styled(Typography)`
  margin-bottom: ${space.xs} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`

export const ProductPriceSC = styled(Typography)`
  margin-bottom: ${space.l} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h1.fontSize} !important;
  font-weight: ${typography.h1.fontWeight} !important;
`

export const ProductDescriptionSC = styled(Typography)`
  margin-top: ${space.l} !important;
  margin-bottom: ${space.xxl} !important;
  width: auto;
  max-width: 486px;
  height: auto;
  overflow-x: hidden;
  overflow-y: scroll;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  line-height: ${typography.body1.lineHeight} !important;
  color: ${COLORS.NEUTRAL.N500};
`