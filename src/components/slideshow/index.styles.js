import styled from "styled-components";
import { Box, Button, ButtonGroup, Card, CardMedia, Stack, Typography } from "@mui/material";

import { COLORS, typography, borderRadius, space, BREAKPOINTS } from "../../styles/styles";

// SHARED STYLES -------------------------------------

const indicatorStyle = `
  width: clamp(8px, 8px, 8px) !important;
  height: clamp(8px, 8px, 8px) !important;

  @media only screen and (min-width: ${BREAKPOINTS.md}px) {
    width: clamp(12px, 12px, 12px) !important;
    height: clamp(12px, 12px, 12px) !important;
  }
`;

const glassStyle = `
  background: rgba(255, 255, 255, 0.09);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12.1px);
  -webkit-backdrop-filter: blur(12.1px);
`;

// COMPONENT STYLES -------------------------------------

export const SlideShowSC = styled(Box)`
  position: relative;
  width: 100%;
`

export const SkeletonContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%) !important;
  border-radius: ${borderRadius.m} !important;
  overflow: hidden !important;
`;

export const CardSC = styled(Card)`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  box-shadow: none !important;
  border-radius: 0 !important;

  @media only screen and (min-width: ${BREAKPOINTS.lg}px) {
    padding-bottom: 42.86%;  /* 21:9 aspect ratio */
  }
`

export const MediaSC = styled(CardMedia)`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  border-radius: 0 !important;
`

export const ControlSC = styled(ButtonGroup)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  padding: ${space.xs} ${space.l} !important;
  background-color: ${COLORS.NEUTRAL.N50} !important;

  @media only screen and (min-width: ${BREAKPOINTS.md}px) {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: transparent !important;
    padding: ${space.m} ${space.l} !important;
  }
`

export const PaginationIndicatorStackSC = styled(Stack)`
  
`

export const PaginationIndicatorSC = styled(Box)`
  ${indicatorStyle};
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${COLORS.PRIMARY.P100};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500};
  }
`

export const IndicatorTextSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
`

export const PaginationActiveIndicatorSC = styled(Box)`
  ${indicatorStyle};
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${COLORS.PRIMARY.P500} !important;
  cursor: pointer;
`

export const ControlButtonContainerSC = styled(Box)`
  display: flex !important;
  flex-direction: row !important;
`;

export const PrevButtonSC = styled(Box)`
  margin-right: ${space.m};
  border-radius: ${borderRadius.rounded} !important;
  ${glassStyle};
  
  & > button {
    border: 0 !important;
    color: ${COLORS.NEUTRAL.N500} !important;
  }
`

export const NextButtonSC = styled(Box)`
  border-radius: ${borderRadius.rounded} !important;
  ${glassStyle};

  & > button {
    border: 0 !important;
    color: ${COLORS.NEUTRAL.N500} !important;
  }
`

