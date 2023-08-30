import styled from "styled-components";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const ProductCardSC = styled(Card)`
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
    flex: 1;
  }
`;

export const CardMediaContainerSC = styled(Box)`
  max-height: 124px;
  border-radius: ${borderRadius.s} !important;
  margin-bottom: ${space.xs} !important;
  overflow: hidden;

  @media only screen and (min-width: 640px) {
    max-height: 200px;
  }
`;

export const CardMediaSC = styled(CardMedia)`
  width: clamp(100%, 100%, 100%);
  min-height: 124px;
  height: 124px;
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

export const ProductNameSC = styled(Typography)`
  width: 100% !important;
  max-width: 100% !important;
  height: clamp(24px, 24px, 24px) !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductPriceSC = styled(Typography)`
  width: 100% !important;
  max-wdith: 100% !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;