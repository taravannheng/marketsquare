import { FC } from "react";

// 3rd-party dependencies imports
import _ from "lodash";
import { useSelector } from "react-redux";

// component imports
import Review from "../review/review.component";
import ReviewForm from "../review-form/review-form.component";

// state management imports
import { selectUser } from "../../store/user/user.selector";
import { selectProductReviews } from "../../store/review/review.selector";

// props or interfaces imports
import ReviewDisplayProps from "./review-display.interface";
import ReviewInterface from "../review/review.interface";

// styling imports
import {
  EmptyTextSC,
  ReviewDisplaySC,
  ReviewStackSC,
  ReviewTitleSC,
  TitleSC,
} from "./review-display.styles";

const ReviewDisplay: FC<ReviewDisplayProps> = ({ reviews, productID }) => {
  const user = useSelector(selectUser);
  const productReviews = useSelector(selectProductReviews(productID));
  let otherReviews: ReviewInterface[] = productReviews;
  let userReview = null;

  // filter out user's review
  if (user) {
    productReviews.map((review: ReviewInterface) => {
      if (review.userID === user._id) {
        userReview = review;
      }

      return;
    });

    otherReviews = productReviews.filter(
      (review: ReviewInterface) => review.userID !== user._id
    );
  }

  return (
    <ReviewDisplaySC>
      <TitleSC>{`Reviews ${
        productReviews ? `(${productReviews.length})` : ""
      }`}</TitleSC>
      <ReviewForm productID={productID} userReview={userReview} />
      {user && userReview && <ReviewTitleSC>Others' Reviews</ReviewTitleSC>}
      <ReviewStackSC direction="column" spacing={4}>
        {!_.isEmpty(otherReviews) &&
          otherReviews?.map((review: ReviewInterface) => {
            return <Review key={review._id} {...review} />;
          })}
      </ReviewStackSC>
      {_.isEmpty(reviews) && <EmptyTextSC>No Reviews...</EmptyTextSC>}
    </ReviewDisplaySC>
  );
};

export default ReviewDisplay;
