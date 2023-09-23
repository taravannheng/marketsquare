import styled from "styled-components";
import {
  Icon,
} from "@mui/material";

import { COLORS } from "../../styles/styles";

// SHARED STYLES -------------------------------------

const iconStyle = `
  display: flex !important;
  justify-content: center;
  align-items: center;
  color: ${COLORS.NEUTRAL.N300};
  cursor: pointer;

  &:hover {
    color: ${COLORS.PRIMARY.P500} !important;
  }

  &:focus {
    color: ${COLORS.PRIMARY.P500} !important;
  }

  &:active {
    color: ${COLORS.PRIMARY.P500} !important;
  }
`;

// COMPONENT STYLES -------------------------------------

export const IconButtonSC = styled(Icon)`
  ${iconStyle};
`;

