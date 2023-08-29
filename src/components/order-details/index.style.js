import styled from "@emotion/styled";
import { Box, CardMedia, Icon, Typography } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";


export const OrderDetailsSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
`;

export const ContentSC = styled(Box)`
  width: clamp(100%, 100%, 100%);
`;

export const OrderIDSC = styled(Typography)`
  margin-bottom: 16px;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
`;

export const ConfirmationEmailSC = styled(Typography)`
  margin-bottom: 32px;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  @media only screen and (min-width: 1080px) {
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
  }
`;

export const PaymentSC = styled(Box)`

`;

export const PaymentTitleSC = styled(Typography)`
  margin-bottom: 16px;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`;

export const PaymentMethodSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  margin-bottom: 32px;
`;

export const PaymentMethodTextSC = styled(Typography)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  @media only screen and (min-width: 1080px) {
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
  }
`;

export const CardLogoSC = styled(CardMedia)`
  width: clamp(40px, 40px, 40px);
  height: clamp(40px, 40px, 40px);
  background-size: contain;
  background-position: center;
  margin-left: 24px;
  margin-right: 12px;
`;

export const CardIconSC = styled(Icon)`
  margin-left: 24px;
  margin-right: 12px;
`;

export const LastFourSC = styled(Typography)`

`;

export const ShippingSC = styled(Box)`
`;

export const ShippingTitleSC = styled(Typography)`
  margin-bottom: 16px;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`;

export const ShippingAddressSC = styled(Typography)`
  display: flex;
  flex-direction: row;
  width: clamp(100%, 100%, 100%);
  margin-bottom: 12px;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  @media only screen and (min-width: 1080px) {
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
  }
`;

export const ShippingAddressDetailsSC = styled(Typography)`
  margin-left: 12px;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  @media only screen and (min-width: 1080px) {
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
  }
`;

export const ShippingMethodSC = styled(Typography)`
  width: 48ch;
  max-width: 100%;
  margin-bottom: 24px;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  @media only screen and (min-width: 1080px) {
    font-size: ${typography.body1.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
  }
`;

export const EmptyContentTextSC = styled(Typography)`

`;

export const ButtonContainerSC = styled(Box)`
  display: none;

  @media only screen and (min-width: 1080px) {  
    display: block;
  }
`;