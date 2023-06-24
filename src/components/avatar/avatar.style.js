import styled from "@emotion/styled";
import { Avatar } from "@mui/material";

import colors from "../../styles/colors";
import typography from "../../styles/typography";

export const AvatarSC = styled(Avatar)`
  border: 2px solid ${colors.light};
  color: ${colors.lightest};
  background-color: ${colors.primary};
  transition: all 0.3s ease-in-out;

  &:hover {
    border: 2px solid ${colors.primary};
    cursor: pointer;
  }

  &:active {
    transform: scale(0.7);
  }
`;