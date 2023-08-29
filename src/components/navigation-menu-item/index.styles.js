import styled from "styled-components";
import { Box, Button, CardMedia, Link, Stack, Typography } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";

export const NavigationMenuItemSC = styled(Box)`
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);
  overflow: hidden;
`;

export const MenuSC = styled(Button)`
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);
  padding: 0 24px !important;
  color: ${colors.darkest} !important;
  text-transform: none !important;
  border-radius: 0 !important;
  transition: all 0.3s ease;

  &:hover {
    color: ${COLORS.NEUTRAL.N0} !important;
    background-color: ${COLORS.PRIMARY.P500} !important;
    cursor: pointer;
  }
`;

export const MenuTextSC = styled(Typography)`
  transition: all 0.3s ease;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`;

export const SubMenuSC = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  width: clamp(100vw, 100vw, 100vw) !important;
  padding: 24px;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  overflow: hidden;
  border: 1px solid ${COLORS.NEUTRAL.N50} !important;
`;

export const SubMenuMediaSC = styled(CardMedia)`
  width: 25vw;
`;

export const CategoryContainerSC = styled(Stack)`
  display: flex;
`;

export const CategorySC = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 200px;
  overflow: hidden;
`;

export const CategoryItemSC = styled(Box)`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 100%;
`;

export const CategoryItemTitleSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  margin-bottom: 24px !important;
`;

export const CategoryItemStackSC = styled(Stack)``;

export const LinkSC = styled(Link)`
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-decoration: none !important;
  color: ${colors.dark} !important;

  &:hover {
    text-decoration: underline !important;
    color: ${COLORS.PRIMARY.P500} !important;
  }
`;
