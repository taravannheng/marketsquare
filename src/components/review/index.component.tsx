import { FC } from "react";

import {
  ReviewSC,
  MediaSC,
  ContentSC,
  ReviewerSC,
  CommentSC,
} from "./index.styles";
import ReviewInterface from "./index.interface";
import Rating from "../rating/index.component";
import SeeMoreText from "../see-more-text/see-more-text.component";

const Review: FC<ReviewInterface> = ({
  width,
  height,
  reviewer,
  comment,
  rating,
  avatarUrl,
}) => {
  return (
    <ReviewSC
      sx={{
        width: `${width && width} !important`,
        height: `${height && height} !important`,
      }}
    >
      <MediaSC image={avatarUrl} />
      <ContentSC>
        <ReviewerSC>{reviewer}</ReviewerSC>
        <Rating type="long" rating={rating} showLabel={false} />
        <CommentSC><SeeMoreText defaultTextLength={250}>{comment}</SeeMoreText></CommentSC>
      </ContentSC>
    </ReviewSC>
  );
};

export default Review;
