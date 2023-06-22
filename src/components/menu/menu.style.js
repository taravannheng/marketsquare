import styled from "@emotion/styled";
import { Menu, MenuItem } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import borderRadius from "../../styles/border-radius";
import spacing from "../../styles/spacing";
import shadows from "../../styles/shadows";

export const MenuSC = styled(Menu)`

  .MuiMenu-paper {
    box-shadow: ${shadows.large.rounded} !important;
  }

  & ul {
    background-color: ${colors.light} !important;
  }  
`;

export const MenuItemSC = styled(MenuItem)`
  color: ${colors.darkest} !important;

  & svg {
    color: ${colors.grey};
    margin-right: ${spacing.s};
  }

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;

    & * {
      color: ${colors.lightest} !important;
    }
  }
`;