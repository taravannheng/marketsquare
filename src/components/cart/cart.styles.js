import styled, { css } from "styled-components";
import {
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  Badge,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { COLORS, typography, space, borderRadius } from "../../styles/styles";

// SHARED STYLES -------------------------------------

const flexCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// COMPONENT STYLES -------------------------------------

export const BadgeContainerSC = styled(Box)`
  ${flexCentered};
  width: clamp(44px, 44px, 44px);
  height: clamp(44px, 44px, 44px);
  cursor: pointer;
`;

export const BadgeSC = styled(Badge)`
  ${flexCentered};
  cursor: pointer;

  & .MuiBadge-badge {
    background-color: ${COLORS.PRIMARY.P500};
    color: ${COLORS.NEUTRAL.N0};
    font-size: ${typography.small.fontSize} !important;
    font-weight: ${typography.small.fontWeight} !important;
  }
`;

export const ShoppingCartSC = styled(ShoppingCart)`
  color: ${COLORS.NEUTRAL.N300};
  font-size: 20px !important;

  ${BadgeContainerSC}:hover & {
    cursor: pointer;
    color: ${COLORS.PRIMARY.P500};
  }

  @media only screen and (min-width: 640px) {
    font-size: 24px !important;
  }
`;

export const TotalContainerSC = styled(Box)`
  ${flexSpaceBetween};
  width: clamp(100%, 100%, 100%);
  margin-bottom: ${space.m} !important;  
`;

export const TotalLabelSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900};
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
`;

export const TotalTextSC = styled(Typography)`
  color: ${COLORS.PRIMARY.P500};
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
`;

export const CheckoutButtonSC = styled(Button)`
  ${flexCentered};
  width: clamp(100%, 100%, 100%);
  background-color: ${COLORS.NEUTRAL.N50} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  border-radius: ${borderRadius.s};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500} !important;
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

// ---------------------------------------------------

export const DrawerSC = styled(Drawer)`
  position: relative;
`;

export const CartSC = styled(Box)`
  padding: ${space.xxl} ${space.l} 180px ${space.l};
  width: clamp(360px, 360px, 360px);
  height: auto;
  background-color: ${COLORS.NEUTRAL.N0};
`;

export const LogoContainerSC = styled(Box)`
  ${flexCentered};
  width: clamp(100%, 100%, 100%);
  height: clamp(64px, 64px, 64px);
  margin-bottom: ${space.xxl};
`;

export const TitleContainerSC = styled(Box)`
  position: relative !important;
  ${flexCentered};
  height: clamp(32px, 32px, 32px);
  margin-bottom: ${space.xl};
`;

export const IconButtonSC = styled(IconButton)`
  position: absolute !important;
  top: 0;
  left: 0;
  ${flexCentered};
  width: clamp(32px, 32px, 32px);
  height: clamp(32px, 32px, 32px);
  border-radius: ${borderRadius.rounded};
  background-color: ${COLORS.NEUTRAL.N50} !important;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500} !important;
  }

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: -6px;
    font-size: ${typography.h5.fontSize}
    color: ${COLORS.NEUTRAL.N300};
  }

  &:hover > svg {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const CartTitleSC = styled(Typography)`
  font-size: ${typography.h2.fontSize} !important;
  font-weight: ${typography.h2.fontWeight} !important;
`;

export const AlertContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  margin-bottom: ${space.l};
`;

export const CheckoutContainerSC = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: clamp(360px, 360px, 360px);
  padding: ${space.s} ${space.l} ${space.xxl} ${space.l};
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: ${COLORS.NEUTRAL.N0};
`;

export const EmptyCartContentSC = styled(Box)`
  ${flexCentered};
  flex-direction: column;
  height: 100% !important;
`;

export const EmptyCartIconSC = styled(Box)`
`;

export const EmptyCartTextSC = styled(Typography)`
  margin-top: ${space.m} !important;
  margin-bottom: ${space.l} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-align: center;
  color: ${COLORS.NEUTRAL.N500} !important;
`;