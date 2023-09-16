import styled from "styled-components";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Icon,
  IconButton,
  Typography,
} from "@mui/material";

import {
  COLORS,
  typography,
  space,
  borderRadius,
  shadows,
} from "../../styles/styles";

// SHARED STYLES

const bodyTextStyles = `
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
`;

const bodyElementStyles = `
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 100%;
  width: 100%;
  padding: ${space.m};
`;

// COMPONENT STYLES

export const ReviewFormSC = styled(Box)`
  margin-bottom: ${space.xl};
`;

export const SignInTextSC = styled(Typography)`
  ${bodyTextStyles};
`;

export const PurchaseProductTextSC = styled(Typography)`
  ${bodyTextStyles};
`;

export const AddReviewTextSC = styled(Typography)`
  ${bodyTextStyles};
`;

// FORM CARD FOR LARGE SCREEN - ALTERNATIVE TO BOTTOM SHEET

export const FormCardSC = styled(Card)`
  position: relative;
  box-shadow: none !important;
`;

export const FormCardBodySC = styled(Box)`
  box-sizing: border-box;
  display: flex !important;
  flex-direction: row !important;
  align-items: flex-start !important;
  min-width: 100%;
  width: 100%;
  transition: transform 0.3s ease-in-out;
  // box-shadow: ${shadows.large.rounded} !important;
`;

export const FormCardRatingSC = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  width: 100%;
  padding: ${space.xl} ${space.l} !important;
  border: 1px solid ${COLORS.NEUTRAL.N200} !important;
  border-radius: ${borderRadius.m} !important;
`;

export const FormCardRatingTitleSC = styled(Typography)`
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  margin-bottom: ${space.xxl} !important;
`;

export const FormCardRatingButtonContainerSC = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${space.xxl} !important;
`;

export const FormCardReviewSC = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100%;
  width: 100%;
  padding: ${space.xl} ${space.l} !important;
  border: 1px solid ${COLORS.NEUTRAL.N200} !important;
  border-radius: ${borderRadius.m} !important;
`;

export const FormCardReviewTitleSC = styled(Typography)`
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  margin-bottom: ${space.xxl} !important;
`;

export const FormCardReviewButtonContainerSC = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: ${space.l} !important;

  & > button:first-child {
    margin-right: ${space.m} !important;
  }
`;

export const FormCardCloseButtonSC = styled(Icon)`
  position: absolute !important;
  top: 8px !important;
  right: 8px !important;
  z-index: 2;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  color: ${COLORS.NEUTRAL.N300} !important;
  cursor: pointer !important;
  border-radius: ${borderRadius.rounded} !important;

  &:hover {
    color: ${COLORS.NEUTRAL.N400} !important;
    background-color: ${COLORS.NEUTRAL.N50} !important;
  }
`;

// BOTTOMSHEET

export const BottomSheetTitleSC = styled(Typography)`
  font-size: ${typography.h4.fontSize} !important;
  font-weight: ${typography.h4.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
`;

export const BottomSheetBodySC = styled(Box)`
  display: flex;
  flex-direction: row;
  transition: transform 0.3s ease-in-out;

  padding-top: ${space.xl};
  padding-bottom: ${space.xxl};
`;

export const BottomSheetRatingSC = styled(Box)`
  ${bodyElementStyles};
  padding-top: ${space.xxxl};
`;

export const RatingErrorTextSC = styled(Typography)`
  text-align: center;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  color: ${COLORS.RED.R500} !important;
`;

export const ReviewErrorTextSC = styled(Typography)`
  min-width: 100%;
  width: 100%;
  text-align: left;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.RED.R500} !important;
`;

export const BottomSheetReviewSC = styled(Box)`
  ${bodyElementStyles};
`;

export const RatingButtonContainerSC = styled(Box)`
  margin-top: ${space.xl};
`;

export const ReviewButtonContainerSC = styled(Box)`
  margin-top: ${space.xl};

  & > button:first-child {
    margin-bottom: ${space.m};
  }
`;

export const ReviewContainerSC = styled(Box)`
  position: relative;
  padding-bottom: ${space.l} !important;
  border-bottom: 1px solid ${COLORS.NEUTRAL.N100} !important;

  // delete button

  & > button {
    margin-left: calc(${space.xxxl} - 8px) !important;
    margin-top: ${space.xs} !important;
    color: ${COLORS.NEUTRAL.N500} !important;

    &:hover {
      color: ${COLORS.RED.R500} !important;
    }
  }
`;

export const ReviewTitleSC = styled(Typography)`
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  margin-bottom: ${space.l} !important;
`;

export const EditIconSC = styled(Icon)`
  position: absolute !important;
  top: ${space.xxl} !important;
  right: 0 !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  width: clamp(44px, 44px, 44px) !important;
  height: clamp(44px, 44px, 44px) !important;
  color: ${COLORS.NEUTRAL.N300} !important;
  cursor: pointer !important;
  border-radius: ${borderRadius.rounded} !important;

  &:hover {
    color: ${COLORS.PRIMARY.P500} !important;
    background-color: ${COLORS.NEUTRAL.N50} !important;
  }
`;

export const DeleteReviewBottomSheetBodySC = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${space.xl} ${space.m} ${space.xxl} ${space.m};

  // delete button

  & > button:first-of-type {
    margin-bottom: ${space.m} !important;
    background-color: ${COLORS.RED.R500} !important;
  }
`;

export const DeletePromptSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;
  margin-bottom: ${space.xl} !important;
`;
