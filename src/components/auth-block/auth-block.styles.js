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
  background-color: ${COLORS.PRIMARY.P500} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  color: ${COLORS.NEUTRAL.N0} !important;
`;

export const SignInButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${COLORS.NEUTRAL.N50} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  transition: background-color 0.2s ease-in-out !important;

  &:hover {
    color: ${COLORS.NEUTRAL.N0} !important;
    background-color: ${COLORS.PRIMARY.P500} !important;
  }
`;