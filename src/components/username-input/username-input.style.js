import styled from "styled-components";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import spacing from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";
import shadows from "../../styles/shadows";
import { Box, Icon, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";

export const UsernameInputSC = styled(Box)`
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

  ${UsernameInputSC}:focus-within & {
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
`;

export const TooltipTextSC = styled(Typography)`
  margin-bottom: ${spacing.xs} !important;
  color: ${colors.darkest} !important;
  font-size: inherit !important;
  font-weight: inherit !important;
`;

export const TooltipListSC = styled(List)`
  margin: 0 !important;
  padding: 0 !important;
`;

export const TooltipItemSC = styled(ListItem)`
  margin: 0 0 ${spacing.xxs} 0 !important;
  padding: 0 !important;
`;

export const TooltipItemIconSC = styled(ListItemIcon)`
  position: relative !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  min-width: 18px !important;
  width: 18px !important;
  max-width: 18px !important;
  height: 18px !important;
  margin-right: ${spacing.xs} !important;
  color: ${colors.grey} !important;
  transition: all 0.3s ease-in-out;

  & > svg {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    margin: 0 !important;
    font-size: 18px !important;
    transition: all 0.3s ease-in-out;
  }
`;

export const TooltipItemTextSC = styled(ListItemText)`
  margin: 0 !important;
  padding: 0 !important;
  color: ${colors.dark} !important;
  font-size: ${typography.body.fontSize} !important;
  font-weight: ${typography.body.fontWeight} !important;
  line-height: ${typography.body.lineHeight} !important;

  & > span {
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    transition: color 0.3s ease-in-out;
  }
`;

export const StatusTextSC = styled(Typography)`
  color: ${colors.red} !important;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  font-style: italic !important;
`;

