import { FC } from "react";
import _ from "lodash";

import SuggestionListInterface from "./suggestion-list.interface";
import {
  EmptyTextSC,
  SuggestionListSC,
  ValidationTextHighlightSC,
  ValidationTextSC,
} from "./suggestion-list.style";
import SuggestionItem from "../suggestion-item/suggestion-item.component";

const SuggestionList: FC<SuggestionListInterface> = ({
  suggestions,
  correctedSearchTerm,
  setSearchTerm,
}) => {
  return (
    <SuggestionListSC>
      {!_.isEmpty(correctedSearchTerm) && (
        <ValidationTextSC variant="body1">
          Did you mean:{" "}
          <ValidationTextHighlightSC
            variant="caption"
            onClick={() => setSearchTerm(correctedSearchTerm)}
          >
            {correctedSearchTerm}
          </ValidationTextHighlightSC>
        </ValidationTextSC>
      )}
      {!_.isEmpty(suggestions) &&
        suggestions.map((suggestion) => (
          <SuggestionItem
            key={`suggestion-item-${suggestion._id}`}
            suggestion={suggestion}
          />
        ))}
      {_.isEmpty(suggestions) && (
        <EmptyTextSC>No products found...</EmptyTextSC>
      )}
    </SuggestionListSC>
  );
};

export default SuggestionList;
