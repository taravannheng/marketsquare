import styled from "@emotion/styled";
import { Avatar, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

import COLORS from "../../styles/colors";
import typography from "../../styles/typography";

export const SuggestionItemSC = styled(ListItem)`
  width: 100%;
  color: ${COLORS.NEUTRAL.N900};
  padding: 0 !important;
  cursor: pointer;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &:hover {
    color: ${COLORS.PRIMARY.P500};
  }
`;

export const MediaSC = styled(ListItemAvatar)`
  width: clamp(40px, 40px, 40px) !important;
  height: clamp(40px, 40px, 40px) !important;
  margin-right: 8px;
  overflow: hidden;
`;

export const MediaAvatarSC = styled(Avatar)`
  width: 40px !important;
  height: 40px !important;
  border-radius: 8px !important;
`;

export const TextSC = styled(ListItemText)`
  width: fit-content;
  margin: 0;
  color: inherit;
`;

