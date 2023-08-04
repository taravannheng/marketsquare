import styled from "styled-components";
import { Box, Button, Typography, Link } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const SignUpFormSC = styled.form`
  width: 480px !important;
  max-width: 100vw !important;
  padding: 0 ${space.l} !important; 

  @media only screen and (min-width: 1080px) {
    max-width: 480px !important;
    padding: 0 ${space.xxl} !important;
  }
`;

export const TitleSC = styled(Typography)`
  margin-bottom: ${space.l} !important;
  font-size: ${typography.h2.fontSize} !important;
  font-weight: ${typography.h2.fontWeight} !important;

  @media only screen and (min-width: 1080px) {
    text-align: center;
    font-size: ${typography.h1.fontSize} !important;
    font-weight: ${typography.h1.fontWeight} !important;
  }
`;

export const AlertContainerSC = styled(Box)`
  margin-bottom: ${space.m} !important;
`;

export const SignUpButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  margin-top: ${space.l} !important;
  margin-bottom: ${space.l} !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.primary} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  color: ${colors.lightest} !important;
`;

export const SignUpWithGoogleButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  margin-top: ${space.xl} !important;
  margin-bottom: ${space.m} !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.light} !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }
`;

export const SocialLogoSC = styled.img`
  width: 24px !important;
  height: 24px !important;
  margin-right: ${space.xs};
`;

export const SignUpWithFacebookButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  margin-bottom: ${space.xl} !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.light} !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  text-transform: none !important;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: ${colors.primary} !important;
    color: ${colors.lightest} !important;
  }
`;

export const SignInSC = styled(Typography)`
  text-align: center;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
`;

export const SignInLinkSC = styled(Link)`
  color: ${colors.primary} !important;
  font-size: inherit !important;
  font-weight: inherit !important;

  &:hover {
    cursor: pointer;
  }
`;

