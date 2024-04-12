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

import { COLORS, typography, space, borderRadius } from "../../styles/styles";

// SHARED STYLES ------------------------------------------

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// COMPONENT STYLES ------------------------------------------

export const FooterSC = styled(Box)``;

export const FooterLogoSC = styled(CardMedia)`
  width: clamp(56px, 56px, 56px) !important;
  height: clamp(56px, 56px, 56px) !important;
  margin-bottom: ${space.xs} !important;
`;

export const SiteDescriptionSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N0} !important;
  margin-bottom: ${space.xl} !important;
`;

export const UtilityLinkContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  height: clamp(100%, 100%, 100%);

  @media only screen and (min-width: 1080px) {
    padding-top: ${space.xl};
  }
`;

export const UtilityLinkTitleSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N0} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;

  @media only screen and (min-width: 1080px) {
    margin-bottom: ${space.l} !important;
    font-size: ${typography.h5.fontSize} !important;
    font-weight: ${typography.h5.fontWeight} !important;
    color: ${COLORS.NEUTRAL.N900} !important;
  }
`;

export const UtilityLinkStackSC = styled(Stack)``;

export const UtilityLinkSC = styled(Link)`
  text-decoration: none !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N0} !important;

  &:hover {
    text-decoration: underline !important;
  }

  @media only screen and (min-width: 1080px) {
    color: ${COLORS.NEUTRAL.N500} !important;

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
  border-radius: ${borderRadius.rounded} !important;
  transition: transform 0.3s ease !important;

  &:hover {
    transform: scale(1.2);
  }

  @media only screen and (min-width: 1080px) {
    margin-bottom: ${space.xl} !important;
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

export const FooterCopyright = styled(Typography)`
  text-align: center !important;
  color: ${COLORS.NEUTRAL.N0} !important;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  margin-top: ${space.xxl} !important;

  @media only screen and (min-width: 1080px) {
    margin-top: 0px !important;
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
  }
`;

// SMALL FOOTER ------------------------------------------

export const SmallFooterSC = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: ${space.l};
  background-color: ${COLORS.PRIMARY.P500};

  @media only screen and (min-width: 1080px) {
    display: none;
  }
`;

export const UtilityLinkAccordionContainerSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
  margin-bottom: ${space.xl} !important;
`;

export const AccordionSC = styled(Accordion)`
  background-color: transparent !important;
  box-shadow: none !important;
`;

export const AccordionSummarySC = styled(AccordionSummary)`
  padding-left: 0 !important;
  padding-right: 0 !important;

  & > * {
    color: ${COLORS.NEUTRAL.N0} !important;
  }
`;

export const AccordionDetailsSC = styled(AccordionDetails)`
  padding-left: 0 !important;
  padding-right: 0 !important;
`;

// LARGE FOOTER ------------------------------------------

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
  width: clamp(360px, 360px, 360px) !important;
  height: clamp(100%, 100%, 100%);
  padding: ${space.l} !important;
  background-color: ${COLORS.PRIMARY.P500} !important;
  box-shadow: none !important;
  border-radius: none;
`;

export const FooterLeftContent = styled(CardContent)`
  padding-top: 0px !important;
`;

export const FooterRightContainerSC = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: clamp(100%, 100%, 100%);
  padding: 0 ${space.xxl} !important;
  border: 1px solid ${COLORS.NEUTRAL.N50};
  background-color: ${COLORS.NEUTRAL.N0};
`;