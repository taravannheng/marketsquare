import styled from "styled-components";
import { Box, Typography } from "@mui/material";

import { typography, space } from "../../styles/styles";

export const SignInFormSC = styled.form`
  width: 480px !important;
  max-width: 100vw !important;
  padding: 0 ${space.l} !important; 

  @media only screen and (min-width: 1080px) {
    max-width: 480px;
    padding: 0 ${space.xxl} !important;
  }
`;

export const TitleSC = styled(Typography)`
  margin-bottom: ${space.xl} !important;
  font-size: ${typography.h2.fontSize} !important;
  font-weight: ${typography.h2.fontWeight} !important;

  @media only screen and (min-width: 1080px) {
    text-align: center;
    font-size: ${typography.h1.fontSize} !important;
    font-weight: ${typography.h1.fontWeight} !important;
  }
`;

export const AlertContainerSC = styled(Box)`
  margin-bottom: ${space.xl} !important;
`;


export const InputContainerSC = styled(Box)`
  & > *:not(last-child) {
    margin-bottom: ${space.xxs} !important;
  }
`;

export const SocialLogoSC = styled.img`
  width: 24px !important;
  height: 24px !important;
  margin-right: ${space.xs};
`;

export const SignUpSC = styled(Typography)`
  text-align: center;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
`;

