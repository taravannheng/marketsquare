import ReviewInterface from "../review/index.interface";

interface ReviewFormProps {
  productID: string;
  userReview: ReviewInterface | null;
}

export default ReviewFormProps;