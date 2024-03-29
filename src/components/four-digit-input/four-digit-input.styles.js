import styled from 'styled-components';
import { Box, TextField } from '@mui/material';

import { COLORS, space, borderRadius } from '../../styles/styles';

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
  border: 1px solid ${COLORS.NEUTRAL.N100} !important;
  border-radius: ${borderRadius.s} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  background-color: ${COLORS.NEUTRAL.N0} !important;
  transition: border 0.1s ease-in-out;

  &:focus {
    border: 1px solid ${COLORS.PRIMARY.P500} !important;
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
