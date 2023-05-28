import styled from "styled-components";
import { Box, Button, CardMedia, Link, Stack, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const NavigationMenuItemSC = styled(Box)`
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);
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
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
    cursor: pointer;
  }
`;

export const MenuTextSC = styled(Typography)`
  transition: all 0.3s ease;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
`;

export const SubMenuSC = styled(Box)`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: flex;
  padding: 24px;
  background-color: ${colors.lightest} !important;
  overflow: hidden;
  border: 1px solid ${colors.light} !important;
`;

export const SubMenuMediaSC = styled(CardMedia)`
  width: 25vw;
`;

export const CategoryContainerSC = styled(Box)`
  display: flex;
  margin-right: 56px;
`;

export const CategorySC = styled(Box)`
  flex: 1;
  margin-right: 56px;
  overflow: hidden;
`;

export const CategoryItemSC = styled(Box)``;

export const CategoryItemTitleSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  margin-bottom: 24px !important;
`;

export const CategoryItemStackSC = styled(Stack)``;

export const LinkSC = styled(Link)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-decoration: none !important;
  color: ${colors.darkest} !important;

  &:hover {
    text-decoration: underline !important;
    color: ${colors.primary} !important;
  }
`;
