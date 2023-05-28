import styled from 'styled-components';
import { Card, CardContent, CardMedia, IconButton, Box, Typography } from '@mui/material';

import colors from '../../styles/colors';
import typography from '../../styles/typography';

export const CartItemRootSC = styled(Card)`
  box-sizing: border-box;
  display: flex;
  width: clamp(312px, 312px, 312px);
  height: clamp(120px, 120px, 120px);
  border: 1px solid ${colors.light};
  border-radius: 8px !important;
  margin-bottom: 8px;
  box-shadow: none !important;
`;

export const CartItemImageSC = styled(CardMedia)`
  width: clamp(140px, 140px, 140px) !important;
  height: auto;
`;

export const CartItemContentSC = styled(CardContent)`
  width: clamp(172px, 172px, 172px) !important;
  padding: 16px !important;
  overflow: hidden;
`;

export const ItemNameSC = styled(Typography)`
  width: clamp(144px, 144px, 144px);
  margin-bottom: 4px !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  color: ${colors.darkest};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ItemSubTotalSC = styled(Typography)`
  width: clamp(100%, 100%, 100%);
  margin-bottom: 10px !important;
  font-size: ${typography.h6.fontSize} !important;
  font-weight: ${typography.h6.fontWeight} !important;
  color: ${colors.darkGrey};
`;

export const ControlContainerSC = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(100%, 100%, 100%);
  height: clamp(24px, 24px, 24px);
  overflow: hidden;
`;

export const QuantityContainerSC = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: clamp(86px, 86px, 86px);
  height: clamp(24px, 24px, 24px);
  overflow: hidden;
`;

export const DecreaseButtonSC = styled(IconButton)`
display: flex;
justify-content: center;
align-items: center;
width: clamp(24px, 24px, 24px);
height: clamp(24px, 24px, 24px);
border-radius: 100%;
background-color: ${colors.light} !important;
transition: background-color 0.3s linear;

&:hover {
  background-color: ${colors.red} !important;
}

& > svg {
  width: 16px;
  height: 16px;
  font-size: ${typography.h5.fontSize}
  color: ${colors.mediumGrey};
}

&:hover > svg {
  color: ${colors.lightest} !important;
}
`;

export const QuantityTextSC = styled(Typography)`
  color: ${colors.darkest} !important;
  font-size: ${typography.body1.fontSize};
  font-weight: ${typography.body1.fontWeight};
`;

export const IncreaseButtonSC = styled(IconButton)`
display: flex;
justify-content: center;
align-items: center;
width: clamp(24px, 24px, 24px);
height: clamp(24px, 24px, 24px);
border-radius: 100%;
background-color: ${colors.light} !important;
transition: background-color 0.3s linear;

&:hover {
  background-color: ${colors.primary} !important;
}

& > svg {
  width: 16px;
  height: 16px;
  font-size: ${typography.h5.fontSize}
  color: ${colors.mediumGrey};
}

&:hover > svg {
  color: ${colors.lightest} !important;
}
`;

export const RemoveButtonSC = styled(IconButton)`
display: flex;
justify-content: center;
align-items: center;
width: clamp(44px, 44px, 44px) !important;
height: clamp(24px, 24px, 24px);
border-radius: 1000px !important;
background-color: ${colors.light} !important;
transition: background-color 0.3s linear;

&:hover {
  background-color: ${colors.red} !important;
}

& > svg {
  width: 16px;
  height: 16px;
  font-size: ${typography.h5.fontSize}
  color: ${colors.mediumGrey};
}

&:hover > svg {
  color: ${colors.lightest} !important;
}
`;