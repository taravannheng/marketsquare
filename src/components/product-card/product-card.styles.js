import styled from "styled-components";
import {
  IconButton,
  Box,
  Card,
  CardContent,
  Button,
  CardMedia,
  CardActions,
  Typography,
} from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import Rating from "../rating/index.component";

export const ProductCardSC = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  min-width: 170px;
  flex: 1;
  padding-bottom: 16px;
  background-color: ${colors.lightest};
  border: 1px solid ${colors.light};
  border-radius: 8px !important;
  box-shadow: none !important;
  overflow: hidden;
  cursor: pointer;

  @media only screen and (min-width: 640px) {
    min-width: 276px;
    flex: 1;
  }
`;

export const CardMediaSC = styled(CardMedia)`
  width: clamp(100%, 100%, 100%);
  min-height: 124px;
  height: 124px;
  margin-bottom: 8px;

  @media only screen and (min-width: 640px) {
    min-height: 200px;
  }
`;

export const CardContentSC = styled(CardContent)`
  width: clamp(100%, 100%, 100%);
  padding: 0 12px !important;
`;

export const ProductContentHeaderSC = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  width: 100%;
  padding: 0 8px 8px 0 !important;
  padding: 8px !important;
`;

export const ProductContentBodySC = styled(Box)`
  padding: 0 8px 8px 8px !important;
`;

export const ProductNameSC = styled(Typography)`
  margin: 0 !important;
  padding: 0;
  color: ${colors.darkest};
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media only screen and (min-width: 1080px) {
    font-size: ${typography.h5.fontSize} !important;
    font-weight: ${typography.h5.fontWeight} !important;
  }
`;

export const RatingSC = styled(Rating)`
`

export const ProductPriceBigCardSC = styled(Typography)`
  display: none;
  width: auto !important;
  height: clamp(24px, 24px, 24px);
  padding: 0 12px;
  border-radius: 1000px;
  border: 1px solid ${colors.light};
  margin: 0;
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;

  @media only screen and (min-width: 640px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductInfoSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;

export const ProductPriceSmallCardSC = styled(Typography)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto !important;
  max-width: 80px;
  height: clamp(24px, 24px, 24px);
  padding: 0 12px;
  border-radius: 1000px;
  border: 1px solid ${colors.light};
  margin: 0;
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;

  @media only screen and (min-width: 640px) {
    display: none;
  }
`;

export const AddToCartButtonContainerSC = styled(CardActions)`
  display: flex;
  justify-content: end;
  width: clamp(100%, 100%, 100%);
  margin-top: 16px;
  padding: 0 !important;
`;

export const AddToCartIconButtonSC = styled(IconButton)`
display: flex;
justify-content: center;
align-items: center;
// width: clamp(80px, 80px, 80px) !important;
width: clamp(100%, 100%, 100%);
height: clamp(32px, 32px, 32px);
border-radius: 1000px !important;
background-color: ${colors.light} !important;
transition: background-color 0.3s linear;

&:hover {
  background-color: ${colors.primary} !important;
}

& > svg {
  width: 24px;
  height: 24px;
  font-size: ${typography.h5.fontSize}
  color: ${colors.grey};
}

&:hover > svg {
  color: ${colors.lightest} !important;
}

@media only screen and (min-width: 640px) {
  display: none !important;
}
  
`;

export const AddToCartButtonSC = styled(Button)`
  display: none !important;
  color: ${colors.grey} !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  background-color: ${colors.light} !important;
  box-shadow: none !important;
  transition: background-color 0.3s linear;

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
  }

  @media only screen and (min-width: 640px) {
    display: block !important;
  }
`;

export const RemoveFromCartButtonSC = styled(Button)`
  display: none !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  color: ${colors.lightest} !important;
  background-color: ${colors.primary} !important;
  box-shadow: none !important;
  transition: background-color 0.3s linear;

  &:hover {
    color: ${colors.lightest} !important;
    background-color: ${colors.primary} !important;
  }

  @media only screen and (min-width: 640px) {
    display: block !important;
  }
`;

export const DefaultButtonContainerSC = styled(Box)`
  display: none !important;

  @media only screen and (min-width: 640px) {
    display: block !important;
  }
`;