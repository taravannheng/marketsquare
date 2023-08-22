import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import spacing from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";
import { Box, Icon, TextField, Typography } from "@mui/material";

export const EmailInputSC = styled(Box)`
  width: 100%;
  overflow: hidden;
`;

export const LabelContainerSC = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: fit-content !important;
  max-width: fit-content !important;
  margin-bottom: ${spacing.xs};
`;

export const LabelSC = styled(Typography)`
  margin-right: ${spacing.xxs} !important;
  color: ${colors.darkest} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  transition: color 0.3s ease-in-out;

  ${EmailInputSC}:focus-within & {
    color: ${colors.primary} !important;
  }
`;

export const StatusIconSC = styled(Icon)`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  width: 18px !important;
  height: 18px !important;
  transition: opacity 0.3s ease-in-out;

  & > svg {
    margin: 0 !important;
    font-size: 18px !important;
  }
`;

export const InputSC = styled(TextField)`
  width: 100% !important;
  border: 0px !important;
  margin-bottom: ${spacing.xs} !important;

  & input {
    padding: ${spacing.xs} ${spacing.m} !important;
    border: 0px !important;
    border-radius: ${borderRadius.s} !important;
    color: ${colors.darkest} !important;
    background-color: ${colors.light} !important;
    transition: border 0.1s ease-in-out;

    &:focus {
      border: 1px solid ${colors.primary} !important;
    }
  }

  & fieldset {
    padding: 0px !important;
    border: 0px !important;
  }
`;

export const TooltipSC = styled(Box)`
  dfisplay: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100% !important;
  padding: ${spacing.xs} !important;
  border-radius: ${borderRadius.s} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  line-height: ${typography.body.lineHeight} !important;
  background-color: ${colors.light} !important;
  margin-bottom: ${spacing.m} !important;
`;

export const TooltipTextSC = styled(Typography)`
  margin-bottom: ${spacing.xs} !important;
  color: ${colors.darkest} !important;
  font-size: inherit !important;
  font-weight: inherit !important;
`;

export const StatusTextSC = styled(Typography)`
  color: ${colors.red} !important;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  font-style: italic !important;
`;

