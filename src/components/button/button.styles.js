import styled from "styled-components";
import { Box, Button, IconButton } from "@mui/material";

import { COLORS, typography, borderRadius, space } from "../../styles/styles";

// SHARED STYLES ------------------------------------------

const buttonStyles = `
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  text-transform: none !important;

  &:disabled {
    opacity: 0.5;
  }
`;

// COMPONENT STYLES ---------------------------------------

export const IconSC = styled(IconButton)`
  & > svg {
    font-size: 24px !important;
  }
`;

export const PrimaryButtonSC = styled(Button)`
  ${buttonStyles};
  height: clamp(44px, 44px, 44px) !important;
  padding: 0 32px !important;
  background-color: ${COLORS.PRIMARY.P500} !important;
  color: ${COLORS.NEUTRAL.N0} !important;
  border-radius: ${borderRadius.s} !important;

  &:hover {
    background-color: ${COLORS.PRIMARY.P600} !important;
  }

  &:active {
    background-color: ${COLORS.PRIMARY.P700} !important;
  }

  & > ${IconSC} {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const SecondaryButtonSC = styled(Button)`
  ${buttonStyles};
  height: clamp(44px, 44px, 44px) !important;
  padding: 0 32px !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  color: ${COLORS.PRIMARY.P500} !important;
  border: 1px solid ${COLORS.PRIMARY.P500} !important;
  border-radius: ${borderRadius.s} !important;

  &:hover {
    background-color: ${COLORS.PRIMARY.P500} !important;
    color: ${COLORS.NEUTRAL.N0} !important;
  }

  &:active {
    background-color: ${COLORS.PRIMARY.P600} !important;
  }

  & > ${IconSC} {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const TertiaryButtonSC = styled(Button)`
  ${buttonStyles};
  padding: 0 !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  color: ${COLORS.PRIMARY.P500} !important;

  &:hover {
    color: ${COLORS.PRIMARY.P600} !important;
  }

  &:active {
    color: ${COLORS.PRIMARY.P700} !important;
  }

  & > ${IconSC} {
    color: ${COLORS.PRIMARY.P500} !important;
  }
`;

export const ProgressIndicatorContainerSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: ${space.m};
`;



