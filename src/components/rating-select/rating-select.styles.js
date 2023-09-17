import styled from "styled-components";
import { Box, Icon, IconButton, Rating, Stack, Typography } from "@mui/material";

import { COLORS, typography, space } from '../../styles/styles';


export const RatingSelectSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const IconSC = styled(Icon)`
  width: fit-content !important;
  height: fit-content !important;
  cursor: pointer;
`;

export const LabelSC = styled(Typography)`
  padding: ${space.l} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
`;
