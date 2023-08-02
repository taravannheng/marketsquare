import styled from 'styled-components';
import { Box, TextField } from '@mui/material';

import colors from '../../styles/colors';
import typography from '../../styles/typography';
import space from '../../styles/spacing';
import borderRadius from '../../styles/border-radius';

export const FourDigitInputSC = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100% !important;
  height: 48px !important;
`;

export const DigitInputSC = styled(TextField)`
flex: 1;
border: 0px !important;

&:not(:last-child) {
  margin-right: ${space.xs} !important;
}

& input {
  padding: ${space.xs} ${space.m} !important;
  border: 0px !important;
  border-radius: ${borderRadius.s} !important;
  color: ${colors.darkest} !important;
  background-color: ${colors.light} !important;
  transition: border 0.1s ease-in-out;

  &:focus {
    border: 1px solid ${colors.primary} !important;
  }
}

& input::-webkit-outer-spin-button,
& input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

// disable the input stepper on firefox
& input[type=number] {
  -moz-appearance: textfield;
}

& fieldset {
  padding: 0px !important;
  border: 0px !important;
}
`;
