import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";

// component imports
import SuggestionItem from "../suggestion-item/suggestion-item.component";
import ProgressIndicator from "../progress-indicator/index.component";

// props or interfaces imports
import SuggestionListInterface from "./suggestion-list.interface";

// styling imports
import {
  EmptyTextSC,
  ProgressIndicatorContainerSC,
  SuggestionListSC,
  ValidationTextHighlightSC,
  ValidationTextSC,
} from "./suggestion-list.style";

const SuggestionList: FC<SuggestionListInterface> = ({
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
