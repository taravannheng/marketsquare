import styled from "@emotion/styled";
import { Box, List, Typography } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const SuggestionListSC = styled(List)`
  position: absolute;
  top: 38px;
  z-index: 1001;
  width: clamp(100%, 100%, 100%);
  padding: 16px 24px;
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${colors.lightest};
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08);

  @media only screen and (min-width: 640px) {
    max-width: 520px !important;
  }
`;

export const ProgressIndicatorContainerSC = styled(Box)`
  width: 100% !important;
  height: 100% !important;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
`;

export const ValidationTextSC = styled(Typography)`
  margin-bottom: 8px !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  font-style: italic;
  color: ${colors.dark};
`;

export const ValidationTextHighlightSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  font-style: italic;
  color: ${colors.primary};
  cursor: pointer;
`;

export const EmptyTextSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${colors.dark};
`;