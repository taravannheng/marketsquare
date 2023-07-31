import styled from "styled-components";
import { Box } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const SlideShowSkeletonSC = styled(Box)`
  width: 100% !important; 
  height: 100% !important;

  background-color: ${colors.light} !important;
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

