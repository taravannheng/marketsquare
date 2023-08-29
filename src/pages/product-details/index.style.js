import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { Box, Typography } from "@mui/material";

export const ProductDetailsPageSC = styled(Box)`
  display: flex;
  flex-direction: column;
  width: clamp(100%, 100%, 100%);
  min-height: 100vh;
`;

export const DividerContainerSC = styled(Box)`
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 24px !important;

  @media only screen and (min-width: 1080px) {
    padding: 0 56px !important;
  }
`;

export const BottomContentContainerSC = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 0 24px !important;
  margin-bottom: 64px;

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
    padding: 0 56px !important;
  }
`;

export const ReviewDisplayContainerSC = styled(Box)`
  flex: 1;
  margin-bottom: 40px !important;
  padding-right: 0px;

  @media only screen and (min-width: 1080px) {
    margin-bottom: 0px !important;
    padding-right: 120px;
  }
`;

export const RelatedProductDisplayContainerSC = styled(Box)`
  flex: 1;
`;

export const EmptyContentSC = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 48px 24px !important;
  margin-bottom: 64px;
  width: clamp(100%, 100%, 100%);
  height: 50vh;

  @media only screen and (min-width: 1080px) {
    flex-direction: row;
    padding: 48px !important;
  }
`

export const BackNavSC = styled(Box)`
  margin-bottom: 32px !important;
`

export const EmptyBodySC = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const EmptyTextSC = styled(Typography)`
  color: ${colors.dark} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
`
