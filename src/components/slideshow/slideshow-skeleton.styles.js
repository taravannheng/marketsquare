import styled from "styled-components";
import { Box } from "@mui/material";

import { COLORS, BREAKPOINTS } from '../../styles/styles';

export const SlideShowSkeletonSC = styled(Box)`
  width: 100% !important; 
  padding-bottom: 56.25%; /* 16:9 aspect ratio */

  @media only screen and (min-width: ${BREAKPOINTS.lg}px) {
    padding-bottom: 42.86%;  /* 21:9 aspect ratio */
  }

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

