import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { BREAKPOINTS } from '../../styles/styles';

export const ConfirmationPageSC = styled(Box)`
`;

export const ContainerSC = styled(Box)`
  @media only screen and (min-width: ${BREAKPOINTS.md}px) {
    height: calc(100vh - 160px) !important; /* to push footer below the fold */
`;