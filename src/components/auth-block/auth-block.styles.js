import styled from "@emotion/styled";
import { Box } from "@mui/material";

import { space, shadows } from "../../styles/styles";

export const AuthBlockSC = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: clamp(100%, 100%, 100%) !important;
  padding: ${space.m} ${space.l} ${space.xxl} ${space.l};
  box-shadow: ${shadows.small.up};

  & a:first-of-type {
    margin-bottom: ${space.m};
  }
`;