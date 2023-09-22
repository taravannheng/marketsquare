import styled from "styled-components";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Icon,
  Typography,
} from "@mui/material";

import { COLORS, typography, space, borderRadius, BREAKPOINTS } from "../../styles/styles";

export const ProductCardSC = styled(Card)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-width: 170px;
  flex: 1;
  padding-bottom: ${space.m} !important;
  background-color: ${COLORS.NEUTRAL.N0};
  box-shadow: none !important;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 640px) {
    min-width: 276px;
  }
`;

export const WishlistIconContainerSC = styled(Box)`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex !important;
  flex-direction: column !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  overflow: hidden;

  @media only screen and (min-width: ${BREAKPOINTS.sm}px) {
    position: static;
  }
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
    padding: ${space.xxs} !important;
    background-color: ${COLORS.NEUTRAL.N0} !important;
    border-radius: ${borderRadius.rounded} !important;

    @media only screen and (min-width: ${BREAKPOINTS.sm}px) {
      padding: 0 !important;
    }
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
    padding: ${space.xxs} !important;
    background-color: ${COLORS.NEUTRAL.N0} !important;
    border-radius: ${borderRadius.rounded} !important;

    @media only screen and (min-width: ${BREAKPOINTS.sm}px) {
      padding: 0 !important;
    }
  }

  &:hover {
    color: ${COLORS.PRIMARY.P600} !important;
  }

  &:active {
    color: ${COLORS.PRIMARY.P700} !important;
  }
}`;

export const CardMediaContainerSC = styled(Box)`
  position: relative;
  width: 100%;
  max-height: 124px;
  padding-bottom: 66.67%; /* 3:2 aspect ratio */
  border-radius: ${borderRadius.s} !important;
  margin-bottom: ${space.xs} !important;
  overflow: hidden;

  @media only screen and (min-width: 640px) {
    max-height: 200px;
  }
`;

export const CardMediaSC = styled(CardMedia)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;

  min-height: 124px;
  transition: transform 0.3s ease-in-out !important;

  @media only screen and (min-width: 640px) {
    min-height: 200px;
  }

  ${ProductCardSC}:hover & {
    transform: scale(1.1) !important;
  }
`;

export const CardContentSC = styled(CardContent)`
  width: clamp(100%, 100%, 100%);
  padding: 0px !important;
`;

export const ProductNameContainerSC = styled(Box)`
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
  width: 100% !important;
  height: 24px !important;
`;

export const ProductNameSC = styled(Typography)`
  width: 100% !important;
  max-width: 100% !important;
  padding: 0 !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPriceSC = styled(Typography)`
  width: 100% !important;
  max-wdith: 100% !important;
  padding: 0 !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;