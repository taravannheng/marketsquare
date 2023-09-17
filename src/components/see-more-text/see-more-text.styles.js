import styled from "styled-components";
import { Box, Button, Typography, Link } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const SeeMoreTextSC = styled(Typography)`
  font-size: ${typography.body1.fontSize} !important;
  font-weight: ${typography.body1.fontWeight} !important;
`;

export const ButtonSC = styled(Button)`
  padding-left: 0 !important;
  color: ${COLORS.PRIMARY.P500} !important;
  background-color: transparent !important;
  font-size: ${typography.body2.fontSize} !important;
  font-weight: ${typography.body2.fontWeight} !important;
  line-height: 100% !important;
  text-transform: none !important;
`;
