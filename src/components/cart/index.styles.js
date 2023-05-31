import styled from "styled-components";
import {
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";
import { ShoppingCart, ArrowBackIos } from "@mui/icons-material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const CartButtonSC = styled(Box)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(120px, 120px, 120px);
  height: clamp(40px, 40px, 40px);
  padding: 0 24px; 
  border-radius: 1000px;
  background-color: ${colors.primary};
  cursor: pointer;
  transition: background-color 0.3s linear;
`;

export const ShoppingCartSC = styled(ShoppingCart)`
  color: ${colors.lightest};
  font-size: 30px;
`;

export const CartCounterSC = styled(Box)`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(24px, 24px, 24px);
  height: clamp(24px, 24px, 24px);
  border-radius: 1000px;
  color: ${colors.primary};
  background-color: ${colors.lightest};
  font-family: ${typography.h5.fontFamily};
  font-weight: ${typography.h5.fontWeight};
  font-size: ${typography.h5.fontSize};
`;

export const TotalContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px !important;  
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  background-color: ${colors.light} !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  border-radius: 8px;
  transition: background-color 0.3s linear;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }
`;

export const EmptyCartTextSC = styled(Typography)`
  margin-left: 24px;
  font-size: 16px;
  font-weight: 400px;
  color: ${colors.dark} !important;
  text-align: center;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  font-family: ${typography.body1.fontFamily} !important;
`;

// ---------------------------------------------------

export const DrawerSC = styled(Drawer)`
  position: relative;
`;

export const CartSC = styled(Box)`
  padding: 56px 24px 180px 24px;
  width: clamp(360px, 360px, 360px);
  height: auto;
  background-color: ${colors.lightest};
`;

export const LogoContainerSC = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(64px, 64px, 64px);
  margin-bottom: 48px;
`;

export const TitleContainerSC = styled(Box)`
  position: relative !important;
  display: flex;
  justify-content: center;
  align-items: center;
  height: clamp(32px, 32px, 32px);
  margin-bottom: 32px;
`;

export const IconButtonSC = styled(IconButton)`
  position: absolute !important;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(32px, 32px, 32px);
  height: clamp(32px, 32px, 32px);
  border-radius: 100%;
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
  font-family: ${typography.h2.fontFamily} !important;
`;

export const CheckoutContainerSC = styled(Box)`
  position: fixed;
  bottom: 0;
  right: 0;
  width: clamp(360px, 360px, 360px);
  padding: 12px 24px 48px 24px;
  box-shadow: 0 -4px 4px 0 rgba(0, 0, 0, 0.05);
  background-color: ${colors.lightest};
`;
