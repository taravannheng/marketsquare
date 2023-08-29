import styled, { css } from "styled-components";
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Box,
  Typography,
} from "@mui/material";

import { colors, typography, borderRadius, space } from "../../styles/styles";

// SHARED STYLES -------------------------------------------------------

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// COMPONENT STYLES -------------------------------------------------------

export const CartItemRootSC = styled(Card)`
  box-sizing: border-box;
  display: flex;
  width: clamp(312px, 312px, 312px);
  height: clamp(120px, 120px, 120px);
  border: 1px solid ${COLORS.NEUTRAL.N50};
  border-radius: ${borderRadius.s} !important;
  margin-bottom: ${space.xs};
  box-shadow: none !important;
`;

export const CartItemImageSC = styled(CardMedia)`
  width: clamp(140px, 140px, 140px) !important;
  height: auto;
`;

export const CartItemContentSC = styled(CardContent)`
  width: clamp(172px, 172px, 172px) !important;
  padding: ${space.m} !important;
  overflow: hidden;
`;

export const ItemNameSC = styled(Typography)`
  width: clamp(144px, 144px, 144px);
  margin-bottom: ${space.xxs} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemSubTotalSC = styled(Typography)`
  width: clamp(100%, 100%, 100%);
  margin-bottom: ${space.s} !important;
  color: ${colors.dark};
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`;

export const ControlContainerSC = styled(Box)`
  ${flexSpaceBetween};
  width: clamp(100%, 100%, 100%);
  height: clamp(24px, 24px, 24px);
  overflow: hidden;
`;

export const QuantityContainerSC = styled(Box)`
  position: relative;
  ${flexSpaceBetween};
  width: clamp(86px, 86px, 86px);
  height: clamp(24px, 24px, 24px);
  overflow: hidden;
`;

export const DecreaseButtonSC = styled(IconButton)`
  ${flexCenter};
  width: clamp(24px, 24px, 24px);
  height: clamp(24px, 24px, 24px);
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${COLORS.NEUTRAL.N50} !important;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.red} !important;
  }

  & > svg {
    width: 16px;
    height: 16px;
    font-size: ${typography.h5.fontSize}
    color: ${COLORS.NEUTRAL.N300};
  }

  &:hover > svg {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const QuantityTextSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize};
  font-weight: ${typography.body.fontWeight};
`;

export const IncreaseButtonSC = styled(IconButton)`
  ${flexCenter};
  width: clamp(24px, 24px, 24px);
  height: clamp(24px, 24px, 24px);
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${COLORS.NEUTRAL.N50} !important;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500} !important;
  }

  & > svg {
    width: 16px;
    height: 16px;
    font-size: ${typography.h5.fontSize}
    color: ${COLORS.NEUTRAL.N300};
  }

  &:hover > svg {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const RemoveButtonSC = styled(IconButton)`
  ${flexCenter};
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(24px, 24px, 24px);
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${COLORS.NEUTRAL.N50} !important;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.red} !important;
  }

  & > svg {
    width: 16px;
    height: 16px;
    font-size: ${typography.h5.fontSize}
    color: ${COLORS.NEUTRAL.N300};
  }

  &:hover > svg {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;
