interface ReviewTextAreaProps {
  review: string;
  setReview: (review: string) => void;
  maxLength?: number;
  rows?: number;
}

export default ReviewTextAreaProps;