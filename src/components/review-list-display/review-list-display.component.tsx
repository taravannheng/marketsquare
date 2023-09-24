import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { TransitionGroup } from "react-transition-group";
import { Collapse } from "@mui/material";
import ReviewsIcon from "@mui/icons-material/Reviews";
import Cookies from "js-cookie";

import {
  TitleSC,
  ReviewListDisplaySC,
  ReviewListEmptyDescriptionSC,
  ReviewListEmptyIconSC,
  ReviewListEmptySC,
  ProgressIndicatorContainerSC,
} from "./review-list-display.styles";

import Button from "../button/button.component";
import ProgressIndicator from "../progress-indicator/index.component";
import ReviewListItem from "../review-list-item/review-list-item.component";

import ReviewInterface from "../../interfaces/review-interface";
import { selectUser } from "../../store/user/user.selector";
import { space } from "../../styles/styles";
import { ROUTES } from "../../utils/constants";
import { getReviewsByUserID } from "../../apis/reviews/reviews.api";

const ReviewListDisplay: FC = () => {
  const user = useSelector(selectUser);
  const [userReviews, selectUserReviews] = useState<ReviewInterface[]>([]);
  const token = Cookies.get("jwt");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await getReviewsByUserID(user._id, token);
        selectUserReviews(response.data);
      } catch (error: any) {
        console.log(error);
      }

      return setIsLoading(false);
    };

    if (user) {
      fetchUserReviews();
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
