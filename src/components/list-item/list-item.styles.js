import styled from "styled-components";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const ListItemSC = styled(ListItem)`
  width: 100% !important;
  height: clamp(40px, 40px, 40px) !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  border-radius: ${borderRadius.s} !important;
  transition: background-color 0.2s ease-in-out !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500} !important;

    & > * {
      color: ${COLORS.NEUTRAL.N0} !important;
    }
  }
`;

export const ListItemButtonSC = styled(ListItemButton)`
  
`;

export const ListItemIconSC = styled(ListItemIcon)`
  color: ${COLORS.NEUTRAL.N300} !important;

  ${ListItemSC}:hover & {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const ListItemTextSC = styled(ListItemText)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  transition: color 0.2s ease-in-out !important;

  ${ListItemSC}:hover & {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;