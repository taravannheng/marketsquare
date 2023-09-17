import styled from "styled-components";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";

import { COLORS, typography, space, borderRadius } from "../../styles/styles";

// SHARED STYLES

// COMPONENT STYLES

export const ReviewTextAreaSC = styled(Box)`
  position: relative;
  min-width: 100%;
  width: 100%;
  padding-top: ${space.xl};
  padding-bottom: ${space.s};
`;

export const RemainingCharactersSC = styled(Typography)`
  position: absolute;
  top: 0;
  right: 0;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N400};
`;

export const RemainingCharactersCounterSC = styled(Typography)`
  display: inline;
  font-size: ${typography.small.fontSize} !important;
  font-weight: 600 !important;
  color: ${COLORS.NEUTRAL.N400};
`;

export const TextFieldSC = styled(TextField)`
  min-width: 100%;
  width: 100%;
  border: none;

  & .MuiOutlinedInput-root {
    font-size: ${typography.h5.fontSize} !important;
    font-weight: ${typography.body1.fontWeight} !important;
    color: ${COLORS.NEUTRAL.N900} !important;
    border-radius: ${borderRadius.s} !important;
    border: 1px solid ${COLORS.NEUTRAL.N100} !important;
  }
`;
