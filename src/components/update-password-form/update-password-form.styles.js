import styled from "styled-components";
import { Box, Button, Typography, Link } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const FormSC = styled.form`
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
  margin-bottom: ${space.l} !important;
`;

export const PasswordInputContainerSC = styled(Box)`
  & > div:first-child {
    margin-bottom: ${space.s} !important;
  }
`;

export const ButtonContainerSC = styled(Box)`
  margin-top: ${space.xxl} !important;
`;
