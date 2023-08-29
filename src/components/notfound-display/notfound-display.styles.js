import styled from "styled-components";
import { Box, Button, IconButton, Typography, } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const NotFoundDisplaySC = styled(Box)`
  display: flex;
  flex-direction: column !important;
  align-items: center;
  padding: ${space.xl};
  
  @media only screen and (min-width: 864px) {
    flex-direction: row !important;
    justify-content: center;
    padding: ${space.xxxl};
  }
`;

export const BodySC = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 864px) {
    margin-left: ${space.xxxxl};
  }
`;

export const TitleSC = styled(Typography)`
  margin-top: ${space.xl} !important;
  font-size: ${typography.h1.fontSize} !important;
  font-weight: 900 !important;
  color: ${colors.grey} !important;

  @media only screen and (min-width: 864px) {
    font-size: 64px !important;
    font-weight: 900 !important;
  }

  @media only screen and (min-width: 1168px) {
    font-size: 80px !important;
    font-weight: 900 !important;
    color: ${colors.grey} !important;
  }
`;

export const SubtitleSC = styled(Typography)`
  margin-bottom: ${space.l} !important;
  font-size: 24px !important;
  font-weight: 900 !important;
  text-align: center !important;
  color: ${colors.grey} !important;

  @media only screen and (min-width: 864px) {
    font-size: 32px !important;
    font-weight: 900 !important;
  }

  @media only screen and (min-width: 1168px) {
    font-size: 40px !important;
    font-weight: 900 !important;
    color: ${colors.grey} !important;
  }
`;

export const TextSC = styled(Typography)`
margin-bottom: ${space.m} !important;
font-size: ${typography.body1.fontSize} !important;
font-weight: ${typography.body1.fontWeight} !important;
text-align: center !important;
color: ${colors.dark} !important;

@media only screen and (min-width: 864px) {
  font-size: 18px !important;
  font-weight: 600 !important;
  margin-bottom: ${space.xl} !important;
  }
`;

export const ButtonSC = styled(Button)`
  width: 100% !important;
  height: clamp(48px, 48px, 48px) !important;
  margin-top: ${space.xl} !important;
  margin-bottom: ${space.xxxl} !important;
  border-radius: ${borderRadius.s} !important;
  background-color: ${colors.primary} !important;
  color: ${colors.lightest} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  text-transform: none !important;
`;