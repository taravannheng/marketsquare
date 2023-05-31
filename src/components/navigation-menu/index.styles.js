import styled from "styled-components";
import { Box, Stack } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const NavigationMenuSC = styled(Box)`
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  height: clamp(64px, 64px, 64px);
  padding: 0 24px;
  border-bottom: 1px solid ${colors.light};
  background-color: ${colors.lightest};
  color: ${colors.darkest};

  @media only screen and (min-width: 1080px) {
    display: flex;
  }
`;

export const NavigationMenuStackSC = styled(Stack)`
  height: clamp(64px, 64px, 64px);
`;