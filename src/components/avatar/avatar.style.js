import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

import { colors } from "../../styles/styles";

export const AvatarSC = styled(Avatar)`
  border: 2px solid ${colors.light};
  color: ${colors.lightest};
  background-color: ${colors.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    border-color: ${colors.primary};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.7);
  }
`;