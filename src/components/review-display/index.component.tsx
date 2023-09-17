import { FC, useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";

import ReviewDisplayInterface from "./index.interface";
import ReviewInterface from "../review/index.interface";
import {
  EmptyTextSC,
  ReviewDisplaySC,
  ReviewStackSC,
  ReviewTitleSC,
  TitleSC,
} from "./index.styles";
import Review from "../review/index.component";
import ReviewForm from "../review-form/review-form.component";
import { selectUser } from "../../store/user/user.selector";
import { selectReviews } from "../../store/review/review.selector";

const ReviewDisplay: FC<ReviewDisplayInterface> = ({ reviews, productID }) => {
  const user = useSelector(selectUser);
  const allReviews = useSelector(selectReviews);
  const [currentProductReviews, setCurrentProductReviews] = useState<ReviewInterface[] | null>([]);
  const [userHasReviewed, setUserHasReviewed] = useState(false);

  useEffect(() => {
    // if all reviews has changed, get the reviews for this product
    let userReview: ReviewInterface | undefined = undefined;

    if (allReviews) {
      // @ts-ignore
      setCurrentProductReviews(allReviews[`${productID}`]);
    }

    if (user) {
      // @ts-ignore
      userReview = allReviews[`${productID}`]?.find(
        (review: ReviewInterface) => review.userID === user?._id
      );
      
      if (userReview) {
        setUserHasReviewed(true);
      }

      if (!userReview) {
        setUserHasReviewed(false);
      }
    }
  }
  , [user, allReviews]);

  return (
    <ReviewDisplaySC>
      <TitleSC>{`Reviews ${currentProductReviews ? `(${currentProductReviews.length})`  : ''}`}</TitleSC>
      <ReviewForm productID={productID} />
      {user && userHasReviewed  && (
        <ReviewTitleSC>Others' Reviews</ReviewTitleSC> 
      )}
      <ReviewStackSC direction="column" spacing={4}>
        {!_.isEmpty(reviews) &&
          reviews!.map((review: ReviewInterface) => {
            if (review.userID !== user?._id) {
              return <Review key={`review-${review?._id ?? ''}`} {...review} />;
            }
          })}
      </ReviewStackSC>
      {_.isEmpty(reviews) && <EmptyTextSC>No Reviews...</EmptyTextSC>}
    </ReviewDisplaySC>
  );
};

export default ReviewDisplay;
