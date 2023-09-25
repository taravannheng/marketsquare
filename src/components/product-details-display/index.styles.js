import styled from "@emotion/styled";
import { Box, Icon, Typography } from "@mui/material";

import { COLORS, typography, space, borderRadius, BREAKPOINTS } from '../../styles/styles';

// SHARED STYLES -------------------------------------

const pagePadding = `
  padding-left: ${space.l} !important;
  padding-right: ${space.l} !important;

  @media only screen and (min-width: 1080px) {
    padding: 0 !important;
  }
`;

// COMPONENT STYLES -------------------------------------

export const ProductDetailsDisplaySC = styled(Box)`
  position: relative;
  padding: 0 !important;
`

export const BackNavSC = styled(Box)`
  position: absolute;
  top: ${space.l};
  left: ${space.m};
  z-index: 1;

  & svg {
    font-size: ${typography.h5.fontSize} !important;
    font-weight: ${typography.h5.fontWeight} !important;
  }

  & > button {
    padding-right: ${space.m} !important;
    border-radius: ${borderRadius.rounded} !important;
    background-color: ${COLORS.NEUTRAL.N0} !important;
  }

  @media only screen and (min-width: 1080px) {
    position: static;
    margin-top: ${space.xxl} !important;
    margin-left: ${space.xxl} !important;
  }
`;

export const BodySC = styled(Box)`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
    padding: ${space.xxl} !important;
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

export const ProductNameContainerSC = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
  height: clamp(24px, 24px, 24px) !important;\
  padding-right: ${space.m} !important;
`;

export const ProductNameSC = styled(Typography)`
  ${pagePadding};
  margin-bottom: ${space.xs} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`

export const WishlistIconContainerSC = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  overflow: hidden;
  cursor: pointer;
`;

export const WishlistBorderIconSC = styled(Icon)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  border-radius: ${borderRadius.rounded} !important;
  color: ${COLORS.NEUTRAL.N300} !important;
  transition-property: color, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: ease-in-out !important;

  & > svg {
    background-color: ${COLORS.NEUTRAL.N0} !important;
    border-radius: ${borderRadius.rounded} !important;
  }

  &:hover {
    color: ${COLORS.PRIMARY.P500} !important;
  }

  &:active {
    color: ${COLORS.PRIMARY.P600} !important;
  }
}`;

export const WishlistFilledIconSC = styled(Icon)`
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  border-radius: ${borderRadius.rounded} !important;
  color: ${COLORS.PRIMARY.P500} !important;
  transition-property: color, transform !important;
  transition-duration: 0.3s !important;
  transition-timing-function: ease-in-out !important;

  & > svg {
    background-color: ${COLORS.NEUTRAL.N0} !important;
    border-radius: ${borderRadius.rounded} !important;
  }

  &:hover {
    color: ${COLORS.PRIMARY.P600} !important;
  }

  &:active {
    color: ${COLORS.PRIMARY.P700} !important;
  }
}`;

export const ProductPriceSC = styled(Typography)`
  ${pagePadding};  
  margin-bottom: ${space.l} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h1.fontSize} !important;
  font-weight: ${typography.h1.fontWeight} !important;
`

export const RatingContainerSC = styled(Box)`
  ${pagePadding};
`

export const ProductDescriptionSC = styled(Typography)`
  ${pagePadding};
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

export const AddToCartButtonSC = styled(Box)`
  ${pagePadding};

  & > button:first-of-type {
    margin-right: ${space.m} !important;
  }
`;