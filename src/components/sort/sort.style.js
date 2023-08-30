import styled from "styled-components";
import { Typography, Box, Icon, Select, MenuItem, MenuList } from "@mui/material";

import { COLORS, typography, BREAKPOINTS, space } from "../../styles/styles";

export const SortSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto !important;
  max-width: fit-content !important;
  min-height: 44px !important;
  padding: 0 12px;
  background-color: ${COLORS.NEUTRAL.N0};
  border-radius: 8px;
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    max-width: 284px !important;
  }
`;

export const LabelContainerSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media only screen and (min-width: ${BREAKPOINTS.sm}px) {
    padding-right: 12px;
  }
`;

export const LabelIconSC = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px !important;
  margin-top: -4px;
  color: ${COLORS.NEUTRAL.N300} !important;
`;

export const LabelSC = styled(Typography)`
  text-wrap: nowrap;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
`;

export const SelectContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%) !important;
`;

export const SelectSC = styled(Select)`
  width: clamp(100%, 100%, 100%) !important;
  outline: 0 !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
`;

export const MenuItemSC = styled(MenuItem)`
  width: clamp(100%, 100%, 100%) !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  color: ${COLORS.NEUTRAL.N900} !important;

  &:hover {
    color: ${COLORS.NEUTRAL.N0} !important;
    background-color: ${COLORS.PRIMARY.P500} !important;
  }
`;

// BOTTOM SHEET ------------------------------

export const BottomSheetTitleSC = styled(Typography)`
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
`;

export const BottomSheetMenuListSC = styled(MenuList)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: ${space.xxl} !important;
`;

export const BottomSheetMenuItemSC = styled(MenuItem)`
  display: flex !important;
  flex-direction: row !important;
  justify-content: space-between !important;
  align-items: center !important;
  min-width: calc(100% - 32px) !important;
  width: calc(100% - 32px) !important;
  max-width: calc(100% - 32px) !important;
  height: clamp(56px, 56px, 56px) !important;
  padding-left: 0px !important;
  padding-right: 0px !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  
  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.NEUTRAL.N100} !important;
  }
`;