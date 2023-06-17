import styled from "styled-components";
import { Typography, Box, Icon, Select, MenuItem } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const SortSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: clamp(100%, 100%, 300px) !important;
  padding: 8px 0 8px 12px;
  background-color: ${colors.light};
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
  border-right: 1px solid ${colors.grey};
`;

export const LabelIconSC = styled(Icon)`
  margin-right: 4px;
`;

export const LabelSC = styled(Typography)`
  
`;

export const SelectContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%) !important;
`;

export const SelectSC = styled(Select)`
  width: clamp(100%, 100%, 100%) !important;
  outline: 0 !important;
`;

export const MenuItemSC = styled(MenuItem)`
  width: clamp(100%, 100%, 100%) !important;
  background-color: ${colors.lightest} !important;
  color: ${colors.darkest} !important;

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
  }
`;