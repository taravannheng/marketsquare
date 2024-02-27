import { FC } from "react";

import {
  ReviewSC,
  MediaSC,
  ContentSC,
  ReviewerSC,
  CommentSC,
} from "./index.styles";
import ReviewProps from "./index.interface";
import Rating from "../rating/index.component";
import SeeMoreText from "../see-more-text/see-more-text.component";
import Avatar from "../avatar/avatar.component";

const Review: FC<ReviewProps> = ({
  width,
  height,
  username,
  comment,
  rating,
  profileUrl,
}) => {
  return (
    <ReviewSC
      sx={{
        width: `${width && width} !important`,
        height: `${height && height} !important`,
      }}
    >
      <Avatar
        size="large"
        alt={username ? username : undefined}
        src={profileUrl ? profileUrl : undefined}
      />
      <ContentSC>
        <ReviewerSC>{username}</ReviewerSC>
        <Rating type="long" rating={rating} showLabel={false} />
        <CommentSC>
          {comment.length >= 250 ? (
            <SeeMoreText defaultTextLength={250}>{comment}</SeeMoreText>
          ) : (
            comment
          )}
        </CommentSC>
      </ContentSC>
    </ReviewSC>
  );
};

export default Review;
