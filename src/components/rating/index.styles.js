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
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  margin: 0 !important;
  margin-right: 8px !important;
`;

export const ShortRatingNumberSC = styled(Typography)`
  color: ${colors.primary} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  margin: 0 !important;
`;

export const ShortRatingIconSC = styled(Icon)`
  color: ${colors.primary} !important;
  margin-top: -2px !important;
  padding: 0 !important;
`;

export const LabelSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  margin-bottom: 8px !important;
`;

export const StarsSC = styled(Rating)`
  span.MuiRating-iconFilled > svg {
    color: ${colors.primary} !important;
  }
`;