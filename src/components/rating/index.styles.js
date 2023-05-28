import styled from "styled-components";
import { Box, IconButton, Rating, Stack, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";


export const RatingSC = styled(Box)`
  
`;

export const LabelSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  margin-bottom: 8px !important;
`;

export const StarsSC = styled(Rating)`
  span.MuiRating-iconFilled > svg {
    color: ${colors.primary} !important;
  }
`;