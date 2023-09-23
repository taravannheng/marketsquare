import styled from "styled-components";
import {
  Box,
  Card,
  CardMedia,
  Typography,
} from "@mui/material";

import {
  COLORS,
  typography,
  space,
  borderRadius,
} from "../../styles/styles";

// SHARED STYLES ---------------------------------------------------------------

// COMPONENT STYLES ---------------------------------------------------------------

export const WishlistItemSC = styled(Card)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  box-shadow: none !important;
  cursor: pointer;
`;

export const MediaSC = styled(CardMedia)`
  width: clamp(120px, 120px, 120px) !important;
  height: clamp(80px, 80px, 80px) !important;
  border-radius: ${borderRadius.s} !important;
  transition: transform 0.3s ease-in-out;

  ${WishlistItemSC}:hover & {
    transform: scale(1.1);
  }
`;

export const DetailsSC = styled(Box)`
  flex: 1;
  padding: ${space.xs} ${space.m} !important;
`;

export const TitleSC = styled(Typography)`
  margin-bottom: ${space.xxs} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
`;

export const PriceSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
`;

export const ActionsSC = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
`;

export const CartIconButtonContainerSC = styled(Box)`
  display: flex !important;
  flex-direction: column !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  overflow: hidden;
`;