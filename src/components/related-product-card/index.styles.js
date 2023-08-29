import styled from "styled-components";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

export const RelatedProductCardSC = styled(Card)`
  display: flex;
  flex-direction: row;
  border: 1px solid ${colors.light};
  border-radius: 8px !important;
  box-shadow: none !important;

  &:hover {
    cursor: pointer;
    border: 1px solid ${colors.primary};
  }
`

export const CardMediaSC = styled(CardMedia)`
  width: clamp(120px, 120px, 120px);
  height: clamp(120px, 120px, 120px);
`

export const CardContentSC = styled(CardContent)`
  width: calc(100% - 120px);
  height: 100%;
  padding: 16px !important;
`

export const ProductNameSC = styled(Typography)`
  white-space: nowrap;
  overflow-x: scroll;
  overflow-y: hidden;
  color: ${colors.dark} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
`

export const ProductPriceSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.h3.fontSize} !important;
  font-weight: ${typography.h3.fontWeight} !important;
`