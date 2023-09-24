import { FC } from "react";
import _ from "lodash";
import { useSelector } from "react-redux";

import {
  EmptyTextSC,
  ReviewDisplaySC,
  ReviewStackSC,
  ReviewTitleSC,
  TitleSC,
} from "./index.styles";

import Review from "../review/index.component";
import ReviewForm from "../review-form/review-form.component";

import ReviewDisplayInterface from "./index.interface";
import ReviewInterface from "../review/index.interface";
import { selectUser } from "../../store/user/user.selector";
import { selectProductReviews } from "../../store/review/review.selector";

const ReviewDisplay: FC<ReviewDisplayInterface> = ({ reviews, productID }) => {
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
      {user && userReview  && (
        <ReviewTitleSC>Others' Reviews</ReviewTitleSC> 
      )}
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
