import { FC, useState } from "react";
import { Icon } from "@mui/material";
import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

import RatingInterface from "./index.interface";
import { LabelSC, RatingSC, StarsSC, ShortRatingSC, ShortRatingLabelSC, ShortRatingNumberSC, ShortRatingIconSC } from "./index.styles";

const Rating: FC<RatingInterface> = ({
  type = "long",
  showLabel = true,
  rating = 0,
}) => {
  const [ratingNumber, setRatingNumber] = useState(rating);
  const totalStars = 5;

  return (
    <>
      {type === "short" && (
        <ShortRatingSC>
          {showLabel && <ShortRatingLabelSC variant="body1">Rating:</ShortRatingLabelSC>}
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
            value={ratingNumber}
            onChange={(event: any, newValue: any) => {
              setRatingNumber(newValue);
            }}
          />
        </RatingSC>
      )}
    </>
  );
};

export default Rating;
