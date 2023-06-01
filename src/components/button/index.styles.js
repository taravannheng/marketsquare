import styled from "styled-components";
import { Button, IconButton } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const ButtonSC = styled(Button)`
  width: clamp(100%, 100%, 100%);
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  color: ${colors.mediumGrey} !important;
  background-color: ${colors.light} !important;
  box-shadow: none !important;
  text-transform: none !important;
  padding: 8px 24px !important;
  transition: background-color 0.3s linear;

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
  }

  &:hover > * {
    color: ${colors.lightest} !important;
  }

  &:active {
    background-color: ${colors.darkPrimary} !important;
  }
`;

export const RoundedButtonSC = styled(Button)`
  width: clamp(100%, 100%, 100%);
  border: 0 !important;
  border-radius: 1000px !important;
  background-color: ${colors.light} !important;
  color: ${colors.mediumGrey} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }

  &:active {
    background-color: ${colors.darkPrimary} !important;
  }
`;

export const IconButtonSC = styled(IconButton)`
  display: flex
  justify-content: space-between !important;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  padding-right: 12px !important;
  border: 0 !important;
  border-radius: 1000px !important;
  background-color: ${colors.light} !important;
  color: ${colors.mediumGrey} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;

  & > svg {
    margin-right: 16px !important;
  }

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }

  &:active {
    background-color: ${colors.darkPrimary} !important;
  }
`;
