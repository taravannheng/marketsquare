import { FC, useState } from 'react';

// 3rd-party dependencies imports
import { StarRounded } from "@mui/icons-material";
import { Stack } from '@mui/material';

// props or interfaces imports
import RatingSelectProps from './rating-select.interface';

// styling imports
import { RatingSelectSC, IconSC, LabelSC } from './rating-select.styles';
import { COLORS } from '../../styles/styles';

// util imports
import { getRatingLabel } from '../../utils/helpers/misc_helpers';

const RatingSelect: FC<RatingSelectProps> = ({ rating, setRating }) => {
  const [hoveredStar, setHoveredStar] = useState(rating);
  let label = getRatingLabel(hoveredStar);

  return (
    <RatingSelectSC>
      <Stack direction="row" spacing={2}>
        {[...Array(5)].map((star, index) => {
          index += 1;
          const color = (index <= hoveredStar) ? COLORS.PRIMARY.P500 : COLORS.NEUTRAL.N300;


          return (
              <IconSC
              key={`star-${index}`}
              sx={{
                color
              }}
              onMouseEnter={() => setHoveredStar(index)}
              onMouseLeave={() => setHoveredStar(rating)}
            >
              <StarRounded
                fontSize="large"
                onClick={() => setRating(index)}
              />
            </IconSC>
            
          );
        }
        )}
      </Stack>
      <LabelSC>{label}</LabelSC>
    </RatingSelectSC>
  )
}

export default RatingSelect;