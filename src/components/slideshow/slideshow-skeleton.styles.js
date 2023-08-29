import styled from "styled-components";
import { Box } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";

export const SlideShowSkeletonSC = styled(Box)`
  width: 100% !important; 
  height: 100% !important;

  background-color: ${COLORS.NEUTRAL.N50} !important;
  animation: pulse 1s infinite linear;

  @keyframes pulse {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

