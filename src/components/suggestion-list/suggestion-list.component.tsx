import { FC } from "react";
import _ from "lodash";

import SuggestionListInterface from "./suggestion-list.interface";
import { EmptyTextSC, SuggestionListSC } from "./suggestion-list.style";
import SuggestionItem from "../suggestion-item/suggestion-item.component";

const SuggestionList: FC<SuggestionListInterface> = ({ suggestions }) => {
  return (
    <SuggestionListSC>
      {!_.isEmpty(suggestions) && suggestions.map((suggestion) => (
        <SuggestionItem key={`suggestion-item-${suggestion._id}`} suggestion={suggestion} />
      ))}
      {_.isEmpty(suggestions) && <EmptyTextSC>No products found...</EmptyTextSC>}
    </SuggestionListSC>
  );
};

export default SuggestionList;
