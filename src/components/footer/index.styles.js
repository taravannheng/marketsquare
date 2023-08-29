import styled, { css } from "styled-components";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Stack,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import { colors, typography, space } from "../../styles/styles";

// SHARED STYLES ------------------------------------------

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// COMPONENT STYLES ------------------------------------------

export const FooterSC = styled(Box)``;

export const SmallFooterSC = styled(Box)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px ${space.l} ${space.l} ${space.l};
  background-color: ${COLORS.PRIMARY.P500};

  @media only screen and (min-width: 1080px) {
    display: none;
  }
`;

export const SmallFooterLogoSC = styled(CardMedia)`
  width: clamp(184px, 184px, 184px) !important;
  height: clamp(80px, 80px, 80px) !important;
  margin-bottom: 40px;
`;

export const UtilityLinkAccordionContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  margin-bottom: 40px;
`;

export const AccordionSC = styled(Accordion)`
  background-color: transparent !important;
  box-shadow: none !important;
`;

export const AccordionSummarySC = styled(AccordionSummary)`
  & > * {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const AccordionDetailsSC = styled(AccordionDetails)``;

export const LargeFooterSC = styled(Box)`
  display: none !important;

  @media only screen and (min-width: 1080px) {
    display: flex !important;
    width: clamp(100%, 100%, 100%);
    height: clamp(300px, 300px, 300px);
    margin: 0 !important;
    background-color: ${COLORS.PRIMARY.P500};
  }
`;

export const FooterLeftContainerSC = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: clamp(330px, 330px, 330px) !important;
  height: clamp(100%, 100%, 100%);
  background-color: ${COLORS.PRIMARY.P500} !important;
  box-shadow: none !important;
  border-radius: none;
`;

export const FooterLogoSC = styled(CardMedia)`
  width: clamp(240px, 240px, 240px);
  height: clamp(240px, 240px, 240px);
`;

export const FooterLeftContent = styled(CardContent)`
  padding-top: 0px !important;
`;

export const FooterCopyright = styled(Typography)`
  color: ${COLORS.NEUTRAL.N0} !important;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  margin-top: 64px !important;

  @media only screen and (min-width: 1080px) {
    margin-top: 0px !important;
  }
`;

export const FooterRightContainerSC = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: clamp(100%, 100%, 100%);
  padding: 0 64px !important;
  border: 1px solid ${COLORS.NEUTRAL.N50};
  background-color: ${COLORS.NEUTRAL.N0};
`;

export const UtilityLinkContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);

  @media only screen and (min-width: 1080px) {
    padding-top: 40px;
  }
`;

export const UtilityLinkTitleSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N0} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;

  @media only screen and (min-width: 1080px) {
    margin-bottom: 20px !important;
    color: ${COLORS.NEUTRAL.N900} !important;
  }
`;

export const UtilityLinkStackSC = styled(Stack)``;

export const UtilityLinkSC = styled(Link)`
  text-decoration: none !important;
  color: ${COLORS.NEUTRAL.N0} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;

  &:hover {
    text-decoration: underline !important;
  }

  @media only screen and (min-width: 1080px) {
    color: ${colors.dark} !important;

    &:hover {
      color: ${COLORS.PRIMARY.P500} !important;
    }
  }
`;

export const SocialContainerSC = styled(Box)`
  ${flexCenter};
  height: 64px;
`;

export const SocialStackSC = styled(Stack)``;

export const SocialLogoContainerSC = styled(Card)`
  ${flexCenter};
  width: clamp(32px, 32px, 32px);
  height: clamp(32px, 32px, 32px);
  box-shadow: none !important;
  border-radius: 36px !important;
  transition: transform 0.3s ease !important;

  &:hover {
    transform: scale(1.2);
  }

  @media only screen and (min-width) {
    width: clamp(36px, 36px, 36px);
    height: clamp(36px, 36px, 36px);

    &:hover {
      transform: scale(1.5);
    }
  }
`;

export const SocialLogoSC = styled(CardMedia)`
  width: clamp(20px, 20px, 20px);
  height: clamp(20px, 20px, 20px);

  @media only screen and (min-width) {
    width: clamp(24px, 24px, 24px);
    height: clamp(24px, 24px, 24px);
  }
`;
