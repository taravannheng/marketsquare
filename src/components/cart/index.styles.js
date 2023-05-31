import styled from "styled-components";
import {
  Typography,
  Button,
  Box,
  IconButton,
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

  &:hover {
    background-color: ${colors.darkPrimary};
  }
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
  margin-top: 24px !important;  
  margin-bottom: 36px !important;  
`;

export const TotalLabelSC = styled(Typography)`
  color: ${colors.dark};
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
  color: ${colors.dark} !important;
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
  color: inherit;
  text-align: center;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  font-family: ${typography.body1.fontFamily} !important;
`;

// ---------------------------------------------------

export const CartSC = styled(Box)`
  padding: 48px 24px;
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
    color: ${colors.mediumGrey};
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
