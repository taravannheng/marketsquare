import styled, { css } from "styled-components";
import { Box, Icon, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";


import { COLORS, typography, space, borderRadius } from "../../styles/styles";

// SHARED STYLES ---------------------------------------------------------------

const flexCenter = css`
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
`;

const flexSpaceBetween = css`
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
`;

// COMPONENT STYLES ---------------------------------------------------------------

export const UsernameInputSC = styled(Box)`
  width: 100%;
  overflow: hidden;
`;

export const LabelContainerSC = styled(Box)`
  ${flexSpaceBetween};
  flex-direction: row;
  width: fit-content !important;
  max-width: fit-content !important;
  margin-bottom: ${space.xs};
`;

export const LabelSC = styled(Typography)`
  margin-right: ${space.xxs} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  transition: color 0.3s ease-in-out;

  ${UsernameInputSC}:focus-within & {
    color: ${COLORS.PRIMARY.P500} !important;
  }
`;

export const StatusIconSC = styled(Icon)`
  ${flexCenter};
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
  margin-bottom: ${space.xs} !important;

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
  padding: ${space.xs} !important;
  border-radius: ${borderRadius.s} !important;
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  line-height: ${typography.body1.lineHeight} !important;
  background-color: ${COLORS.NEUTRAL.N50} !important;
  margin-bottom: ${space.m} !important;
`;

export const TooltipTextSC = styled(Typography)`
  margin-bottom: ${space.xs} !important;
  color: ${COLORS.NEUTRAL.N900} !important;
  font-size: inherit !important;
  font-weight: inherit !important;
`;

export const TooltipListSC = styled(List)`
  margin: 0 !important;
  padding: 0 !important;
`;

export const TooltipItemSC = styled(ListItem)`
  margin: 0 0 ${space.xxs} 0 !important;
  padding: 0 !important;
`;

export const TooltipItemIconSC = styled(ListItemIcon)`
  position: relative !important;
  ${flexCenter};
  min-width: 18px !important;
  width: 18px !important;
  max-width: 18px !important;
  height: 18px !important;
  margin-right: ${space.xs} !important;
  color: ${COLORS.NEUTRAL.N300} !important;
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
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
  line-height: ${typography.body1.lineHeight} !important;
  color: ${COLORS.NEUTRAL.N500} !important;

  & > span {
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    transition: color 0.3s ease-in-out;
  }
`;

export const StatusTextSC = styled(Typography)`
  margin-bottom: ${space.xs} !important;
  color: ${COLORS.RED.R500} !important;
  font-size: ${typography.small.fontSize} !important;
  font-weight: ${typography.small.fontWeight} !important;
  font-style: italic !important;
`;

