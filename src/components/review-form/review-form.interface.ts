import ReviewInterface from "../review/review.interface";

interface ReviewFormProps {
  productID: string;
  userReview: ReviewInterface | null;
}

export default ReviewFormProps;