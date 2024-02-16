import styled from "styled-components";
import { Box } from "@mui/material";

import { space } from "../../styles/styles";

export const ProfileDisplaySC = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: ${space.xxxl};
`;