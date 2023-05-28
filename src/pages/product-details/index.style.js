import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import { Box } from "@mui/material";

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