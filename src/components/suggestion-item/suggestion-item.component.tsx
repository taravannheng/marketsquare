import { FC } from "react";

// 3rd-party dependencies imports
import { ListItemButton } from "@mui/material";

// props or interfaces imports
import SuggestionItemProps from "./suggestion-item.interface";

// styling imports
import {
  MediaAvatarSC,
  MediaSC,
  SuggestionItemSC,
  TextSC,
} from "./suggestion-item.style";
import COLORS from "../../styles/colors";

const SuggestionItem: FC<SuggestionItemProps> = ({ suggestion }) => {
  return (
    <SuggestionItemSC>
      <MediaSC sx={{ minWidth: "40px !important" }}>
        <MediaAvatarSC src={suggestion.imgUrls[0]} alt={suggestion.name} />
      </MediaSC>
      <ListItemButton
        disableRipple
        component="a"
        href={`/product/${suggestion._id}`}
        sx={{
          width: "100%",
          backgroundColor: `${COLORS.NEUTRAL.N0} !important`,
          padding: "0 !important",
        }}
      >
        <TextSC primary={suggestion.name} />
      </ListItemButton>
    </SuggestionItemSC>
  );
};

export default SuggestionItem;
