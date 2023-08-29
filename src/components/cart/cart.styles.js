import styled, { css } from "styled-components";
import {
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

import { colors, typography, space, borderRadius } from "../../styles/styles";

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

export const CartButtonSC = styled(Box)`
  ${flexSpaceBetween};
  box-sizing: border-box;
  width: clamp(80px, 80px, 80px) !important;
  height: clamp(32px, 32px, 32px);
  padding: 0 ${space.m}; 
  border-radius: ${borderRadius.rounded};
  background-color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.3s linear;

  @media only screen and (min-width: 640px) {
    width: clamp(120px, 120px, 120px) !important;
    height: clamp(40px, 40px, 40px) !important;
    padding: 0 ${space.l}; 
  }
`;

export const ShoppingCartSC = styled(ShoppingCart)`
  color: ${colors.lightest};
  font-size: 20px !important;

  @media only screen and (min-width: 640px) {
    font-size: 24px !important;
  }
`;

export const CartCounterSC = styled(Box)`
  ${flexCentered};
  box-sizing: border-box;
  width: clamp(20px, 20px, 20px);
  height: clamp(20px, 20px, 20px);
  border-radius: ${borderRadius.rounded};
  color: ${colors.primary};
  background-color: ${colors.lightest};
  font-weight: ${typography.h5.fontWeight};
  font-size: ${typography.h5.fontSize};

  @media only screen and (min-width: 640px) {
    width: clamp(24px, 24px, 24px);
    height: clamp(24px, 24px, 24px);
  }
`;

export const TotalContainerSC = styled(Box)`
  ${flexSpaceBetween};
  width: clamp(100%, 100%, 100%);
  margin-bottom: ${space.m} !important;  
`;

export const TotalLabelSC = styled(Typography)`
  color: ${colors.darkest};
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
`;

export const TotalTextSC = styled(Typography)`
  color: ${colors.primary};
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
`;

export const CheckoutButtonSC = styled(Button)`
  ${flexCentered};
  width: clamp(100%, 100%, 100%);
  background-color: ${colors.light} !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  border-radius: ${borderRadius.s};
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
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
  background-color: ${colors.lightest};
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
  background-color: ${colors.light} !important;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.primary} !important;
  }

  & > svg {
    width: 16px;
    height: 16px;
    margin-right: -6px;
    font-size: ${typography.h5.fontSize}
    color: ${colors.grey};
  }

  &:hover > svg {
    color: ${colors.lightest} !important;
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
  background-color: ${colors.lightest};
`;

export const EmptyCartContentSC = styled(Box)`
  ${flexCentered};
  flex-direction: column;
  height: 100% !important;
`;

export const EmptyCartIconSC = styled(Box)`
`;

export const ShoppingButtonSC = styled(Button)`
  width: auto-fit !important;
  height: clamp(44px, 44px, 44px) !important;
  padding-left: ${space.xl} !important;
  padding-right: ${space.l} !important;
  margin-top: ${space.xl} !important;
  margin-bottom: ${space.m} !important;
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${colors.primary} !important;
  color: ${colors.lightest} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-transform: none !important;
`;

export const ShoppingButtonIconSC = styled(IconButton)`
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  color: ${colors.lightest} !important;
`;

export const EmptyCartTextSC = styled(Typography)`
  margin-top: ${space.m} !important;
  margin-bottom: ${space.l} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-align: center;
  color: ${colors.dark} !important;
`;