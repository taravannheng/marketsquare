import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";
import shadows from "../../styles/shadows";

export const AuthBlockSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%) !important;
  padding: 16px 24px 48px 24px;
  box-shadow: ${shadows.small.up};
`;

export const SignUpButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  margin-bottom: ${space.m} !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.primary} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  color: ${colors.lightest} !important;
`;

export const SignInButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.light} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  color: ${colors.darkest} !important;
  transition: background-color 0.2s ease-in-out !important;

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
  }
`;