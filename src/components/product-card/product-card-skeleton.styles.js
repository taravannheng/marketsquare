import styled, { keyframes } from "styled-components";
import {
  Box,
} from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import borderRadius from "../../styles/border-radius";

const pulse = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const SkeletonSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-width: 170px;
  flex: 1;
  padding-bottom: 16px;
  background-color: ${colors.lightest};
  border: 1px solid ${colors.light};
  border-radius: 8px !important;
  box-shadow: none !important;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 640px) {
    min-width: 276px;
    flex: 1;
  }
`;

export const MediaSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  min-height: 124px;
  height: 124px;
  margin-bottom: 8px;
  background-color: ${colors.light} !important;

  @media only screen and (min-width: 640px) {
    min-height: 200px;
  }


  background-color: ${colors.light} !important;
  animation: ${pulse} 1s infinite linear;
`;

export const ContentSC = styled(Box)`
  padding: 8px !important;

  @media only screen and (min-width: 640px) {
    padding: 24px !important;
  }
`;

export const TitleSC = styled(Box)`
  width: clamp(100%, 100%, 100%) !important;
  height: clamp(20px, 20px, 20px) !important;
  background-color: ${colors.light} !important;
  animation: ${pulse} 1s infinite linear;
  border-radius: ${borderRadius.rounded} !important;
  margin-bottom: 8px !important;
`;

export const RatingSC = styled(Box)`
  width: clamp(50%, 50%, 50%) !important;
  height: clamp(20px, 20px, 20px) !important;
  background-color: ${colors.light} !important;
  animation: ${pulse} 1s infinite linear;
  border-radius: ${borderRadius.rounded} !important;
  margin-bottom: 8px !important;
`;