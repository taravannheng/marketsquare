import { FC } from "react";
import { ListItemButton, ListItemText } from "@mui/material";

import SuggestionItemInterface from "./suggestion-item.interface";
import {
  MediaAvatarSC,
  MediaSC,
  SuggestionItemSC,
  TextSC,
} from "./suggestion-item.style";
import colors from "../../styles/colors";

const SuggestionItem: FC<SuggestionItemInterface> = ({ suggestion }) => {
  return (
    <SuggestionItemSC>
      <MediaSC sx={{ minWidth: "40px !important" }}>
        <MediaAvatarSC src={suggestion.imgUrls[0]} alt={suggestion.name} />
      </MediaSC>
      <ListItemButton
        component="a"
        href={`/product/${suggestion._id}`}
        sx={{
          width: "100%",
          backgroundColor: `${colors.lightest} !important`,
          padding: "0 !important",
        }}
      >
        <TextSC primary={suggestion.name} />
      </ListItemButton>
    </SuggestionItemSC>
  );
};

export default SuggestionItem;
