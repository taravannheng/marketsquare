import styled from "styled-components";
import { Box, Button, Typography, Link } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";
import space from "../../styles/spacing";
import borderRadius from "../../styles/border-radius";

export const SeeMoreTextSC = styled(Typography)`
  
`;

export const ButtonSC = styled(Button)`
  color: ${colors.primary} !important;
  background-color: transparent !important;
  font-size: ${typography.h5.fontSize} !important;
  font-weight: ${typography.h5.fontWeight} !important;
  text-transform: none !important;
`;
