import styled from "styled-components";
import { Box } from "@mui/material";

import space from "../../styles/spacing";

export const PageSC = styled(Box)`
  display: flex;
  flex-direction: column;
  width: clamp(100%, 100%, 100%);
  min-height: 100vh;
`;

export const FormContainerSC = styled(Box)`
  margin: ${space.xxxl} auto ${space.xxxxl} auto};
  height: calc(100vh - 244px); /* to push footer below the fold */
`;