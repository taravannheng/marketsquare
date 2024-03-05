import { FC, useEffect, useState } from "react";

// 3rd-party dependencies imports
import { useSelector, useDispatch } from "react-redux";
import { TransitionGroup } from "react-transition-group";
import _ from "lodash";
import Cookies from "js-cookie";
import { Collapse } from "@mui/material";
import ReviewsIcon from "@mui/icons-material/Reviews";

// component imports
import Button from "../button/button.component";
import ProgressIndicator from "../progress-indicator/progress-indicator.component";
import ReviewListItem from "../review-list-item/review-list-item.component";

// api imports
import { getReviewsByUserID } from "../../apis/reviews/reviews.api";

// state management imports
import { selectUser } from "../../store/user/user.selector";
import { selectReviews } from "../../store/review/review.selector";
import { selectUserReviews } from "../../store/user-review/user-review.selector";
import USER_REVIEW_ACTION_TYPES from "../../store/user-review/user-review.types";

// props or interfaces imports
import ReviewInterface from "../../interfaces/review-interface";

// styling imports
import {
  TitleSC,
  ReviewListDisplaySC,
  ReviewListEmptyDescriptionSC,
  ReviewListEmptyIconSC,
  ReviewListEmptySC,
  ProgressIndicatorContainerSC,
} from "./review-list-display.styles";
import { space } from "../../styles/styles";

// constants or helper functions imports
import { ROUTES } from "../../utils/constants";

const ReviewListDisplay: FC = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const reviews = useSelector(selectReviews);
  const userReviews = useSelector(selectUserReviews);
  const token = Cookies.get("jwt");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await getReviewsByUserID(user._id, token);
        
        // update user reviews state
        dispatch({
          type: USER_REVIEW_ACTION_TYPES.ADD_USER_REVIEWS,
          payload: response.data,
        });
      } catch (error: any) {
        console.log(error);
      }

      return setIsLoading(false);
    };

    if (user && _.isEmpty(userReviews)) {
      fetchUserReviews();
    }

    if (user && !_.isEmpty(userReviews)) {
      // extract all user reviews from the reviews state
      const userReviewsFromState = reviews.filter((review: ReviewInterface) => {
        return review.userID === user._id;
      });

      const newReviews = _.differenceWith(
        userReviewsFromState,
        userReviews,
        _.isEqual
      );

      // then update the user reviews state
      if (!_.isEmpty(newReviews)) {
        dispatch({
          type: USER_REVIEW_ACTION_TYPES.ADD_USER_REVIEWS,
          payload: newReviews,
        });
      }

      setIsLoading(false);
    }
  }, []);

  return (
    <ReviewListDisplaySC>
      <TitleSC>Your Reviews</TitleSC>
      {isLoading && (
        <ProgressIndicatorContainerSC>
          <ProgressIndicator size={20} />
        </ProgressIndicatorContainerSC>
      )}
      {!_.isEmpty(userReviews) && !isLoading && (
        <TransitionGroup>
          {userReviews.map((review: ReviewInterface) => {
            return (
              <Collapse
                key={`wishlist-item-${review._id}`}
                sx={{
                  "&:not(:last-child)": {
                    marginBottom: `${space.m} !important`,
                  },
                }}
              >
                <ReviewListItem review={review} />
              </Collapse>
            );
          })}
        </TransitionGroup>
      )}
      {_.isEmpty(userReviews) && !isLoading && (
        <ReviewListEmptySC>
          <ReviewListEmptyIconSC>
            <ReviewsIcon />
          </ReviewListEmptyIconSC>
          <ReviewListEmptyDescriptionSC>
            There are no reviews yet. Purchase some products to start
            reviewing...
          </ReviewListEmptyDescriptionSC>
          <Button href={ROUTES.LANDING} rounded>
            Browse Products
          </Button>
        </ReviewListEmptySC>
      )}
    </ReviewListDisplaySC>
  );
};

export default ReviewListDisplay;
