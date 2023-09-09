import styled from "styled-components";
import { Box, Button, ButtonGroup, Card, CardMedia, Stack, Typography } from "@mui/material";

import { COLORS, typography, borderRadius, space, BREAKPOINTS } from "../../styles/styles";

export const SlideShowSC = styled(Box)`
  width: 100%;
`

export const SkeletonContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%) !important;
  height: clamp(100%, 100%, 100%) !important;
  border-radius: ${borderRadius.m} !important;
  overflow: hidden !important;
`;

export const CardSC = styled(Card)`
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  box-shadow: none !important;
  margin-bottom: ${space.m} !important;

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
  border-radius: ${borderRadius.m} !important;
`

export const PaginationSC = styled(ButtonGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%);
`

export const PaginationIndicatorStackSC = styled(Stack)`
  
`

export const PaginationIndicatorSC = styled(Box)`
  width: clamp(14px, 14px, 14px) !important;
  height: clamp(14px, 14px, 14px) !important;
  border-radius: ${borderRadius.rounded} !important;
  background-color: ${COLORS.NEUTRAL.N50};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500};
    border: 1px solid ${COLORS.PRIMARY.P500};
  }
`

export const IndicatorTextSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
`

export const PaginationActiveIndicatorSC = styled(Box)`
  width: clamp(14px, 14px, 14px) !important;
  height: clamp(14px, 14px, 14px) !important;
  border-radius: ${borderRadius.rounded} !important;
  border: 1px solid ${COLORS.PRIMARY.P500};
  background-color: ${COLORS.PRIMARY.P500};
  cursor: pointer;
`

export const PrevButtonSC = styled(Box)`
  margin-right: ${space.l};
  
  & > button {
    background-color: ${COLORS.NEUTRAL.N50} !important;
    border: 0 !important;
    color: ${COLORS.NEUTRAL.N500} !important;
  }

  @media only screen and (max-width: 800px) {
    display: none
  }
`

export const NextButtonSC = styled(Box)`
  margin-left: ${space.l};
  
  & > button {
    background-color: ${COLORS.NEUTRAL.N50} !important;
    border: 0 !important;
    color: ${COLORS.NEUTRAL.N500} !important;
  }

  @media only screen and (max-width: 800px) {
    display: none
  }
`

