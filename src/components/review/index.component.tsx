import { FC } from "react";

// component imports
import Rating from "../rating/rating.component";
import SeeMoreText from "../see-more-text/see-more-text.component";
import Avatar from "../avatar/avatar.component";

// props or interfaces imports
import ReviewProps from "./index.interface";

// styling imports
import { ReviewSC, ContentSC, ReviewerSC, CommentSC } from "./index.styles";

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
