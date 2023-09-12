import ReviewInterface from "../../interfaces/review-interface";

export const addReviews = (reviews: ReviewInterface[], payload: Record<string, ReviewInterface[]>) => {
    return {...reviews, ...payload};
}
