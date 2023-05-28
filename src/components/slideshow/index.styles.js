import styled from "styled-components";
import { Box, Button, ButtonGroup, Card, CardMedia, Stack, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const SlideShowSC = styled(Box)`
  width: clamp(100%, 100%, 100%); 
  height: clamp(100%, 100%, 100%);
  margin: 0 0 80px 0 !important;
  padding: 0 !important;

  @media only screen and (min-width: 1080px) {
    height: clamp(100%, 100%, 100%);
    margin: 0 0 160px 0 !important;
  }
`

export const SlideShowCardSC = styled(Card)`
  width: clamp(100%, 100%, 100%) !important;
  height: calc(100% - 64px);
  margin-bottom: 12px;
  border-radius: 16px !important;
  box-shadow: none !important;
  overflow: hidden !important;

  @media only screen and (min-width: 1080px) {
    margin-bottom: 24px;
  }
`

export const SlideShowMediaSC = styled(CardMedia)`
  width: clamp(100%, 100%, 100%) !important;
  height: clamp(100%, 100%, 100%) !important;
  background-image-position: center; 
  background-image-size: cover; 
  transition: transform 0.3s ease-in-out;
`

export const SlideShowPaginationSC = styled(ButtonGroup)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%);
`

export const SlideShowPaginationPrevButtonSC = styled(Button)`
  display: none !important;
  width: clamp(130px, 130px, 130px);
  height: clamp(40px, 40px, 40px);
  border: 0 !important;
  border-radius: 1000px !important;
  margin-right: 36px !important;
  background-color: ${colors.light} !important;
  color: ${colors.mediumGrey} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  text-transform: none !important;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }

  &:active {
    background-color: ${colors.darkPrimary} !important;
  }

  @media only screen and (min-width: 1080px) {
    display: block !important;
  }
`

export const SlideShowPaginationNextButtonSC = styled(Button)`
  display: none !important;
  width: clamp(130px, 130px, 130px);
  height: clamp(40px, 40px, 40px);
  border: 0 !important;
  border-radius: 1000px !important;
  margin-left: 36px !important;
  background-color: ${colors.light} !important;
  color: ${colors.mediumGrey} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  text-transform: none !important;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }

  &:active {
    background-color: ${colors.darkPrimary} !important;
  }

  @media only screen and (min-width: 1080px) {
    display: block !important;
  }
`

export const SlideShowPaginationIndicatorStackSC = styled(Stack)`
  
`

export const SlideShowPaginationIndicatorSC = styled(Box)`
  width: clamp(14px, 14px, 14px) !important;
  height: clamp(14px, 14px, 14px) !important;
  border-radius: 100%;
  border: 1px solid ${colors.lightGrey};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`

export const IndicatorTextSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
`

export const SlideShowPaginationActiveIndicatorSC = styled(Box)`
  width: clamp(14px, 14px, 14px) !important;
  height: clamp(14px, 14px, 14px) !important;
  border-radius: 100%;
  border: 1px solid ${colors.primary};
  background-color: ${colors.primary};
  cursor: pointer;
`

export const PrevButtonSC = styled(Box)`
  margin-right: 24px;

  @media only screen and (max-width: 800px) {
    display: none
  }
`

export const NextButtonSC = styled(Box)`
  margin-left: 24px;

  @media only screen and (max-width: 800px) {
    display: none
  }
`

