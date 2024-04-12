import styled from "styled-components";
import { Box, Icon, IconButton, Rating, Stack, Typography } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";


export const RatingSC = styled(Box)`
  
`;

export const ShortRatingSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ShortRatingLabelSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  margin: 0 !important;
  margin-right: 8px !important;
`;

export const ShortRatingNumberSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.PRIMARY.P500} !important;
  margin: 0 !important;
`;

export const ShortRatingIconSC = styled(Icon)`
  color: ${COLORS.PRIMARY.P500} !important;
  margin-top: -2px !important;
  padding: 0 !important;
`;

export const LabelSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  margin-bottom: 8px !important;
`;

export const StarsSC = styled(Rating)`
  span.MuiRating-iconFilled > svg {
    color: ${COLORS.PRIMARY.P500} !important;
  }
`;