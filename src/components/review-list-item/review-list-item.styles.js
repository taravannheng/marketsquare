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

export const ListItemSC = styled(Card)`
  display: flex !important;
  flex-direction: row !important;
  box-shadow: none !important;
  overflow: hidden;
  border-radius: none !important;
  cursor: pointer;
`;

export const MediaSC = styled(CardMedia)`
  // ASPECT RATIO: 2:1
  width: clamp(66px, 66px, 66px) !important;
  height: clamp(44px, 44px, 44px) !important;
  overflow: hidden;
  transition: transform 0.3s ease-in-out !important;

  ${ListItemSC}:hover & {
    transform: scale(1.1);
  }
`;

export const ContentSC = styled(Box)`
  flex: 1;
  margin-left: ${space.m} !important;
  overflow: hidden;
`;

export const ProductNameSC = styled(Typography)`
  width: clamp(100%, 100%, 100%) !important;
  margin-top: -4px !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  ${textEllipsis};
`;

export const RatingSC = styled(Typography)`
  ${bodyText};
`;

export const CommentSC = styled(Typography)`
  width: clamp(100%, 100%, 100%) !important;
  height: clamp(24px, 24px, 24px) !important;
  ${bodyText};
  ${textEllipsis};
`;
