import styled from "styled-components";
import { Box } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const LoadingScreenSC = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100vw, 100vw, 100vw);
  height: clamp(100vh, 100vh, 100vh);
  background-color: ${colors.lightest};
`