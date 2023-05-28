import styled from "@emotion/styled";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Typography } from "@mui/material";

export const ProductDetailsDisplaySC = styled(Box)`
  padding: 24px 24px !important;
  
  @media only screen and (min-width: 1080px) {
    padding: 48px 56px !important;
  }
`

export const BackNavSC = styled(Box)`
  margin-bottom: 32px !important;
`

export const SlideShowContainerSC = styled(Box)`  
  width: clamp(100%, 100%, 100%);
  height: clamp(360px, 360px, 360px);
  margin-bottom: 32px;
  overflow: hidden;

  
  @media only screen and (min-width: 1080px) {
    width: clamp(400px, 400px, 400px);
    height: clamp(420px, 420px, 420px);
    margin-bottom: 0;
  }
`

export const BodySC = styled(Box)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
  }
`

export const DetailsContainerSC = styled(Box)`
  width: 100%;

  @media only screen and (min-width: 1080px) {
    width: calc(100% - 400px);
    padding-left: 80px !important;
  }
`

export const ProductNameSC = styled(Typography)`
  margin-bottom: 8px !important;
  color: ${colors.darkGrey} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`

export const ProductPriceSC = styled(Typography)`
  margin-bottom: 24px !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
`

export const ProductDescriptionSC = styled(Typography)`
  margin-top: 24px !important;
  margin-bottom: 48px !important;
  width: auto;
  max-width: 486px;
  height: auto;
  max-height: 96px !important;
  overflow-x: hidden;
  overflow-y: scroll;
  color: ${colors.darkGrey};
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
`