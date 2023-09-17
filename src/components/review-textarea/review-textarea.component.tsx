import { FC } from "react";
import { TextField, createTheme, ThemeProvider } from "@mui/material";

import ReviewTextAreaProps from "./review-textarea.interface";
import {
  RemainingCharactersCounterSC,
  RemainingCharactersSC,
  ReviewTextAreaSC,
  TextFieldSC,
} from "./review-textarea.styles";
import { COLORS } from "../../styles/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: `${COLORS.PRIMARY.P500}`,
    },
  },
});

const ReviewTextArea: FC<ReviewTextAreaProps> = ({
  maxLength = 300,
  review,
  setReview,
  rows = 4,
}) => {
  const remainingCharacters = maxLength - review.length;

  return (
    <ReviewTextAreaSC>
      <RemainingCharactersSC>
        <RemainingCharactersCounterSC>{`${remainingCharacters}`}</RemainingCharactersCounterSC>{" "}
        characters remaining
      </RemainingCharactersSC>
      <ThemeProvider theme={theme}>
        <TextFieldSC
          id="outlined-multiline-static"
          label=""
          multiline
          rows={rows}
          placeholder="Write your review here..."
          inputProps={{ maxLength }}
          value={review}
          onChange={(e: any) => setReview(e.target.value)}
        />
      </ThemeProvider>
    </ReviewTextAreaSC>
  );
};

export default ReviewTextArea;
