import styled from "styled-components";
import { Box, Icon, List, TextField } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const SearchBoxSC = styled(Box)`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: clamp(40px, 40px, 40px) !important;
  padding: 0px 8px;
  background-color: ${colors.light};
  border-radius: 1000px;
  overflow: hidden;
  transition: border 0.3s ease-in-out;

  &:focus-within {
    border: 1px solid ${colors.primary} !important;
  }

  @media only screen and (max-width: 639px) {
    width: clamp(100%, 100%, 100%) !important;
  }
`;

export const SearchIconSC = styled(Icon)`
  transform: scaleX(-1);
  color: ${colors.grey};
  transition: color 0.3s ease-in-out;

  ${SearchBoxSC}:focus-within & {
    color: ${colors.primary};
  }
`;

export const TextFieldSC = styled(TextField)`
  display: flex;
  align-items: center;
  height: clamp(40px, 40px, 40px) !important;
  border: 0px !important;

  .MuiInputBase-root {
    background-color: ${colors.light} !important;
    width: clamp(100%, 100%, 100%) !important;
    height: clamp(40px, 40px, 40px) !important;
    outline: none;
    border: 0px !important;
    color: ${colors.dark} !important;
    font-size: ${typography.body1.fontSize}px !important;
    font-weight: ${typography.body1.fontWeight}px !important;

    @media only screen and (min-width: 960px) {
      width: clamp(400px, 400px, 400px) !important;
    }
  }

  .MuiInputBase-root::after {
    display: none;
  }

  .MuiInputBase-root::before {
    display: none;
  }
`;


export const ClearIconSC = styled(Icon)`
  color: ${colors.grey};
  transition: color 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${colors.primary};
  }
`;