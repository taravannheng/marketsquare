import styled from "@emotion/styled";
import { Box } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";

export const SearchSC = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: clamp(40px, 40px, 40px) !important;
  
  @media only screen and (min-width: 640px) {
    width: clamp(100%, 100%, 100%) !important;
  }
`;