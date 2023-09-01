import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

import { COLORS } from "../../styles/styles";

export const AvatarSC = styled(Avatar)`
  border: 2px solid ${COLORS.NEUTRAL.N50};
  color: ${COLORS.NEUTRAL.N0};
  background-color: ${COLORS.PRIMARY.P500};
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${COLORS.PRIMARY.P500};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.7);
  }
`;