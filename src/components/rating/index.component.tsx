import { FC, useState } from "react";
import { StarRounded, StarOutlineRounded } from "@mui/icons-material";

import RatingInterface from "./index.interface";
import { LabelSC, RatingSC, StarsSC } from "./index.styles";

const Rating: FC<RatingInterface> = ({ showLabel = true, rating = 0 }) => {
  const [ratingNumber, setRatingNumber] = useState(rating);
  const totalStars = 5;

  return (
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
  );
};

export default Rating;
