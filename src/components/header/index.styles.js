import styled from "styled-components";
import { AppBar, Box, Icon, Toolbar } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const AppBarSC = styled(AppBar)`
  
`

export const ToolbarPlaceholderSC = styled(Box)`
  width: 100%;
  height: 100px;
  background-color: ${colors.lightest} !important;
`

export const ToolbarSC = styled(Toolbar)`
  position: fixed !important;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(100px, 100px, 100px);
  border-bottom: 1px solid ${colors.light};
  padding: 0 24px !important;
  background-color: ${colors.lightest};
  box-shadow: none;

  @media only screen and (min-width: 1080px) {
    padding: 0 48px !important;
  }
`;

export const MenuIconSC = styled(Icon)`
  color: ${colors.dark};
  margin-left: 24px;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;