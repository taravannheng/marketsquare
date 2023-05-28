import styled from "styled-components";
import { AppBar, Toolbar, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const AppBarSC = styled(AppBar)`
  box-shadow: none;
`

export const ToolbarSC = styled(Toolbar)`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(100px, 100px, 100px);
  border-bottom: 1px solid ${colors.light};
  padding: 0 58px;
  background-color: ${colors.lightest};
  box-shadow: none;
`;
