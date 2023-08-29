import styled from "styled-components";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ReviewSC = styled(Card)`
  display: flex;
  flex-direction: row;
  box-shadow: none !important;
`;

export const MediaSC = styled(CardMedia)`
  width: clamp(64px, 64px, 64px);
  height: clamp(64px, 64px, 64px);
  border-radius: 8px !important;
`;

export const ContentSC = styled(CardContent)`
  width: calc(100% - 64px);
  height: auto;
  margin: 0 !important;
  padding: 0 !important;
  padding-left: 16px !important;
  overflow: hidden;
`;

export const ReviewerSC = styled(Typography)`
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`;

export const CommentSC = styled(Typography)`
  height: auto;
  overflow-x: hidden;
  color: ${colors.dark};
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  line-height: ${typography.body.lineHeight} !important;
`;