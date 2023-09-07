import styled from "styled-components";
import { Box } from "@mui/material";

import space from "../../styles/spacing";

export const SignUpPageSC = styled(Box)`
  display: flex;
  flex-direction: column;
  width: clamp(100%, 100%, 100%);
  min-height: 100vh;
`;

export const SignUpFormContainerSC = styled(Box)`
  margin: ${space.xxxl} auto;
`;