import { FC } from "react";
import _ from "lodash";

import ReviewDisplayInterface from "./index.interface";
import ReviewInterface from "../review/index.interface";
import {
  EmptyTextSC,
  ReviewDisplaySC,
  ReviewStackSC,
  TitleSC,
} from "./index.styles";
import Review from "../review/index.component";

const ReviewDisplay: FC<ReviewDisplayInterface> = ({ reviews }) => {
  return (
    <ReviewDisplaySC>
      <TitleSC>Reviews</TitleSC>
      <ReviewStackSC direction="column" spacing={4}>
        {!_.isEmpty(reviews) &&
          reviews.map((review: ReviewInterface) => {
            return <Review {...review} />;
          })}
      </ReviewStackSC>
      {_.isEmpty(reviews) && <EmptyTextSC>No Reviews...</EmptyTextSC>}
    </ReviewDisplaySC>
  );
};

export default ReviewDisplay;
