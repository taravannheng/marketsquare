import { FC } from "react";

// 3rd-party dependencies imports
import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

// props or interfaces imports
import RatingProps from "./rating.interface";

// styling imports
import {
  LabelSC,
  RatingSC,
  StarsSC,
  ShortRatingSC,
  ShortRatingLabelSC,
  ShortRatingNumberSC,
  ShortRatingIconSC,
} from "./rating.styles";

const Rating: FC<RatingProps> = ({
  type = "long",
  showLabel = true,
  rating = 0,
}) => {
  const totalStars = 5;

  return (
    <>
      {type === "short" && (
        <ShortRatingSC>
          {showLabel && (
            <ShortRatingLabelSC variant="body1">Rating:</ShortRatingLabelSC>
          )}
          <ShortRatingNumberSC>{rating.toFixed(1)}</ShortRatingNumberSC>
          <ShortRatingIconSC fontSize="small">
            <StarRounded fontSize="small" />
          </ShortRatingIconSC>
        </ShortRatingSC>
      )}
      {type === "long" && (
        <RatingSC>
          {showLabel && <LabelSC>Rating</LabelSC>}
          <StarsSC
            readOnly
            icon={<StarRounded />}
            emptyIcon={<StarOutlineRounded />}
            max={totalStars}
            value={rating}
          />
        </RatingSC>
      )}
    </>
  );
};

export default Rating;
