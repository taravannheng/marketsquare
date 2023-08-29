import styled from "styled-components";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const ListItemSC = styled(ListItem)`
  width: 100% !important;
  height: clamp(40px, 40px, 40px) !important;
  background-color: ${colors.lightest} !important;
  border-radius: ${borderRadius.s} !important;
  transition: background-color 0.2s ease-in-out !important;
  color: ${colors.dark} !important;

  &:hover {
    background-color: ${colors.primary} !important;

    & > * {
      color: ${colors.lightest} !important;
    }
  }
`;

export const ListItemButtonSC = styled(ListItemButton)`
  
`;

export const ListItemIconSC = styled(ListItemIcon)`
  color: ${colors.grey} !important;

  ${ListItemSC}:hover & {
    color: ${colors.lightest} !important;
  }
`;

export const ListItemTextSC = styled(ListItemText)`
  color: ${colors.darkest} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  transition: color 0.2s ease-in-out !important;

  ${ListItemSC}:hover & {
    color: ${colors.lightest} !important;
  }
`;