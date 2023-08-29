import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";

import { colors, typography, space, borderRadius, shadows } from "../../styles/styles";

export const AuthBlockSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%) !important;
  padding: ${space.m} ${space.l} ${space.xxl} ${space.l};
  box-shadow: ${shadows.small.up};
`;

export const SignUpButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  margin-bottom: ${space.m} !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.primary} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-transform: none !important;
  color: ${colors.lightest} !important;
`;

export const SignInButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.light} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-transform: none !important;
  color: ${colors.darkest} !important;
  transition: background-color 0.2s ease-in-out !important;

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
  }
`;