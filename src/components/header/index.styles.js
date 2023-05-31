import styled from "styled-components";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const AppBarSC = styled(AppBar)`
  
`

export const ToolbarPlaceholderSC = styled(Box)`
  width: 100%;
  height: 100px;
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
`;
