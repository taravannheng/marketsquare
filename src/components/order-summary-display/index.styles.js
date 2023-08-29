import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";


export const OrderSummaryDisplaySC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  padding: 40px 24px 80px 24px;

  @media only screen and (min-width: 1080px) {
    padding: 80px 56px;  
  }
`;

export const BackNavSC = styled(Box)`
  display: flex;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  margin-bottom: 40px;

  @media only screen and (min-width: 1080px) {
    display: none;  
  }
`;

export const TitleSC = styled(Typography)`
  margin-bottom: 36px;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h1.fontSize} !important;
  font-weight: ${typography.h1.fontWeight} !important;
`;

export const ContentSC = styled(Box)`
  display: flex;
  flex-direction: column-reverse;

  @media only screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const OrderSummaryContainerSC = styled(Box)`
  flex-basis: 100%;

  @media only screen and (min-width: 624px) {
    width: 50%;
  }

  @media only screen and (min-width: 800px) {
    width: 50%;
  }

  @media only screen and (min-width: 1080px) {
    flex-basis: 40%;
  }

  @media only screen and (min-width: 1280px) {
    flex-basis: 30%;
  }
`;

export const OrderDetailsContainerSC = styled(Box)`
  flex-basis: 100%;
  padding-left: 0 !important;
  margin-bottom: 16px;
  overflow: hidden;

  @media only screen and (min-width: 800px) {
    width: 50%;
    padding-left: 40px !important;
  }

  @media only screen and (min-width: 1080px) {
    flex-basis: 60%;
    padding-left: 80px !important;
  }

  @media only screen and (min-width: 1280px) {
    flex-basis: 70%;
    padding-left: 80px !important;
  }
`;