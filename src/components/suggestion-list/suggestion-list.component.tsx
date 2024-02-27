import { FC } from "react";
import _ from "lodash";

import SuggestionListProps from "./suggestion-list.interface";
import {
  EmptyTextSC,
  ProgressIndicatorContainerSC,
  SuggestionListSC,
  ValidationTextHighlightSC,
  ValidationTextSC,
} from "./suggestion-list.style";
import SuggestionItem from "../suggestion-item/suggestion-item.component";
import ProgressIndicator from "../progress-indicator/index.component";

const SuggestionList: FC<SuggestionListProps> = ({
  suggestions,
  correctedSearchTerm,
  setSearchTerm,
  isLoading,
}) => {
  return (
    <SuggestionListSC>
      <ProgressIndicatorContainerSC>
        {isLoading && <ProgressIndicator size={20} />}
      </ProgressIndicatorContainerSC>
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
      {_.isEmpty(suggestions) && !isLoading && (
        <EmptyTextSC>No products found...</EmptyTextSC>
      )}
    </SuggestionListSC>
  );
};

export default SuggestionList;
