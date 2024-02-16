import styled from "styled-components";
import { Box } from "@mui/material";

import { space } from "../../styles/styles";

export const ProfileFormSC = styled.form`
  width: 480px !important;
  max-width: 100vw !important;
  margin-top: ${space.l} !important;
  padding: 0 ${space.l} !important;

  @media only screen and (min-width: 1080px) {
    max-width: 480px !important;
    padding: 0 ${space.xxl} !important;
    margin-top: ${space.m} !important;
  }
`;


export const AlertContainerSC = styled(Box)`
  margin-top: ${space.xl} !important;
  margin-bottom: ${space.xl} !important;
`;

export const PasswordContainerSC = styled(Box)`
  position: relative;
`;

export const ChangePasswordButtonContainerSC = styled(Box)`
  position: absolute;
  top: 40px;
  right: 8px;
`;