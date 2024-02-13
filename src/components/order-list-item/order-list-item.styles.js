import styled from "styled-components";
import {
  Box, Card, CardMedia, Typography,
} from "@mui/material";

import {
  COLORS,
  typography,
  space,
  borderRadius,
  shadows,
} from "../../styles/styles";

// SHARED STYLES

const bodyText = `
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
`;

const textEllipsis = `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;


// COMPONENT STYLES

export const DateSC = styled(Typography)`
  width: clamp(100%, 100%, 100%) !important;
  margin-bottom: ${space.m} !important;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  ${textEllipsis};
`;

export const IDSC = styled(Typography)`
  width: clamp(100%, 100%, 100%) !important;
  margin-bottom: ${space.s} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  ${textEllipsis};
`;

export const ListItemSC = styled(Card)`
  display: flex !important;
  flex-direction: column !important;
  box-shadow: none !important;
  overflow: hidden;
  border-radius: none !important;
  margin-bottom: ${space.l} !important;
`;

export const ProductItemSC = styled(Card)`
  display: flex !important;
  flex-direction: row !important;
  box-shadow: none !important;
  overflow: hidden;
  border-radius: none !important;
  margin-bottom: ${space.xs} !important;
`;

export const MediaSC = styled(CardMedia)`
  // ASPECT RATIO: 2:1
  width: clamp(132px, 132px, 132px) !important;
  height: clamp(88px, 88px, 88px) !important;
  overflow: hidden;
`;

export const ContentSC = styled(Box)`
  flex: 1;
  margin-left: ${space.m} !important;
  overflow: hidden;
`;

export const ProductNameSC = styled(Typography)`
  width: clamp(100%, 100%, 100%) !important;
  margin-top: -4px !important;
  margin-bottom: ${space.xxs} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  ${textEllipsis};
`;

export const ProductPriceSC = styled(Typography)`
  width: clamp(100%, 100%, 100%) !important;
  margin-top: -4px !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  ${textEllipsis};
`;
