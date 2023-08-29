import styled from "styled-components";
import { Typography, Box, Icon, Select, MenuItem } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";

export const SortSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: clamp(100%, 100%, 300px) !important;
  padding: 0 0 0 12px;
  background-color: ${COLORS.NEUTRAL.N50};
  border-radius: 8px;

  @media only screen and (min-width: 640px) {
    width: auto !important;
    max-width: 284px !important;
  }
`;

export const LabelContainerSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 12px;
  border-right: 1px solid ${COLORS.NEUTRAL.N300};
`;

export const LabelIconSC = styled(Icon)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px !important;
  margin-top: -4px;
  margin-right: 4px;
`;

export const LabelSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`;

export const SelectContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%) !important;
`;

export const SelectSC = styled(Select)`
  width: clamp(100%, 100%, 100%) !important;
  outline: 0 !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`;

export const MenuItemSC = styled(MenuItem)`
  width: clamp(100%, 100%, 100%) !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;

  &:hover {
    color: ${COLORS.NEUTRAL.N0} !important;
    background-color: ${COLORS.PRIMARY.P500} !important;
  }
`;