import styled from "styled-components";
import { Box, Icon, List, TextField } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";

export const SearchBoxSC = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: clamp(100%, 100%, 100%) !important;
  height: clamp(40px, 40px, 40px) !important;
  padding: 0px 8px;
  background-color: ${COLORS.NEUTRAL.N50};
  border-radius: 1000px;
  overflow: hidden;

  &:focus-within {
    border: 1px solid ${COLORS.PRIMARY.P500} !important;
  }
`;

export const SearchIconSC = styled(Icon)`
  transform: scaleX(-1);
  color: ${COLORS.NEUTRAL.N300};
  transition: color 0.3s ease-in-out;

  ${SearchBoxSC}:focus-within & {
    color: ${COLORS.PRIMARY.P500};
  }
`;

export const TextFieldSC = styled(TextField)`
  display: flex;
  align-items: center;
  height: clamp(40px, 40px, 40px) !important;
  border: 0px !important;

  .MuiInputBase-root {
    background-color: ${COLORS.NEUTRAL.N50} !important;
    width: clamp(100%, 100%, 100%) !important;
    height: clamp(40px, 40px, 40px) !important;
    outline: none;
    border: 0px !important;
    font-size: ${typography.body1.fontSize}px !important;
    font-weight: ${typography.body1.fontWeight}px !important;
    color: ${COLORS.NEUTRAL.N500} !important;

    // @media only screen and (min-width: 960px) {
    //   width: clamp(400px, 400px, 400px) !important;
    // }
  }

  .MuiInputBase-root::after {
    display: none;
  }

  .MuiInputBase-root::before {
    display: none;
  }
`;


export const ClearIconSC = styled(Icon)`
  color: ${COLORS.NEUTRAL.N300};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${COLORS.PRIMARY.P500};
  }
`;