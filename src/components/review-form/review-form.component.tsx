import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";
import { Rating, useMediaQuery } from "@mui/material";
import Fade from "@mui/material/Fade";
import Grow from "@mui/material/Grow";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

import ReviewFormProps from "./review-form.interface";
import {
  AddReviewTextSC,
  BottomSheetBodySC,
  BottomSheetRatingSC,
  BottomSheetReviewSC,
  BottomSheetTitleSC,
  DeletePromptSC,
  DeleteReviewBottomSheetBodySC,
  EditIconSC,
  FormCardBodySC,
  FormCardCloseButtonSC,
  FormCardRatingButtonContainerSC,
  FormCardRatingSC,
  FormCardRatingTitleSC,
  FormCardReviewButtonContainerSC,
  FormCardReviewSC,
  FormCardReviewTitleSC,
  FormCardSC,
  PurchaseProductTextSC,
  RatingButtonContainerSC,
  RatingErrorTextSC,
  ReviewButtonContainerSC,
  ReviewContainerSC,
  ReviewErrorTextSC,
  ReviewFormSC,
  ReviewTitleSC,
  SignInTextSC,
} from "./review-form.styles";
import { selectUser } from "../../store/user/user.selector";
import { selectReviews } from "../../store/review/review.selector";
import Button from "../button/button.component";
import RatingSelect from "../rating-select/rating-select.component";
import ReviewTextArea from "../review-textarea/review-textarea.component";
import Review from "../review/index.component";
import SnackBar from "../snackbar/snackbar.component";
import Dialog from "../dialog/dialog.component";
import { ROUTES } from "../../utils/constants";
import { getOrdersByUserIDAndProductID } from "../../apis/orders/order.api";
import {
  createReview,
  updateReview,
  deleteReview,
} from "../../apis/reviews/reviews.api";
import BREAKPOINTS from "../../styles/breakpoints";
import ReviewInterface from "../review/index.interface";

const ReviewForm: FC<ReviewFormProps> = ({ productID }) => {
  const dispatch = useDispatch();
  const isLargeScreen = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);
  const user = useSelector(selectUser);
  const reviews = useSelector(selectReviews);
  const [hasOrdered, setHasOrdered] = useState(false);
  const [showFormCard, setShowFormCard] = useState(false);
  const [showDeleteReviewDialog, setShowDeleteReviewDialog] = useState(false);
  const [isAddReviewBottomSheetOpen, setIsAddReviewBottomSheetOpen] =
    useState(false);
  const [isDeleteReviewBottomSheetOpen, setIsDeleteReviewBottomSheetOpen] =
    useState(false);
  const [isUpdateReviewBottomSheetOpen, setIsUpdateReviewBottomSheetOpen] =
    useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showRatingErrorText, setShowRatingErrorText] = useState(false);
  const [showReviewErrorText, setShowReviewErrorText] = useState(false);
  const [isUndoClicked, setIsUndoClicked] = useState(false);
  const [hasReviewed, setHasReviewed] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
    onUndo?: () => void;
  }>({
    open: false,
    message: "",
    type: "info",
    onUndo: undefined,
  });
  let errorTextTimeout: NodeJS.Timeout | undefined;
  let snackbarTimeout: NodeJS.Timeout | undefined;

  // HANDLERS
  const openBottomSheet = () => {
    const isSmallScreen = !isLargeScreen;

    if (isSmallScreen) {
      setIsAddReviewBottomSheetOpen(true);
    }
  };

  const closeBottomSheet = () => {
    setIsAddReviewBottomSheetOpen(false);
    setIsDeleteReviewBottomSheetOpen(false);
    setIsUpdateReviewBottomSheetOpen(false);
    setShowFormCard(false);
  };

  const handleAddReview = () => {
    openBottomSheet();
    setShowFormCard(true);
  };

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  const handleRatingSubmit = () => {
    rating && setShowReviewForm(true);

    !rating && setShowRatingErrorText(true);

    // after 5s set showRatingErrorText to false
    errorTextTimeout = setTimeout(() => {
      setShowRatingErrorText(false);
    }, 2000);
  };

  const handleSnackbarUndo = () => {
    // reset review data
    setRating(0);
    setReview("");

    // reset state and clear timeout
    setIsUndoClicked(true);
    clearTimeout(snackbarTimeout);

    // close snackbar
    snackbarCloseHandler();
  };

  const addReviewHandler = () => {
    !review && setShowReviewErrorText(true);

    // after 5s set showReviewErrorText to false
    errorTextTimeout = setTimeout(() => {
      setShowReviewErrorText(false);
    }, 2000);

    if (review) {
      setShowReviewForm(false);

      // close bottom sheet
      closeBottomSheet();

      // show snackbar
      setSnackbar({
        open: true,
        message: "Adding review...",
        type: "info",
        onUndo: handleSnackbarUndo,
      });

      snackbarTimeout = setTimeout(async () => {
        if (!isUndoClicked) {
          // send review data to the backend
          const reviewData = {
            productID,
            userID: user?.id,
            rating,
            comment: review,
          };

          try {
            const response = await createReview(reviewData);

            // if status is 200 then display a snackbar with success message
            if (response.status === 200) {
              setSnackbar({
                open: true,
                message: "Your review has been added.",
                type: "success",
              });
              setHasReviewed(true);

              // add user review to review state
              let reviewFromServer = response.data;

              // add username and profileUrl
              reviewFromServer = {
                ...reviewFromServer,
                username: user?.username ?? null,
                profileUrl: user?.profileUrl ?? null,
              };

              const reviewsPayload = {
                [`${productID}`]: [
                  // @ts-ignore
                  ...reviews[`${productID}`],
                  reviewFromServer,
                ],
              };

              dispatch({
                type: "ADD_REVIEWS",
                payload: reviewsPayload,
              });
            }
          } catch (error) {
            console.log(error);
            // if status is not 200 then display a snackbar with error message
            setSnackbar({
              open: true,
              message: "Something went wrong. Please try again.",
              type: "error",
            });
          }
        }
        setIsUndoClicked(false);
      }, 4000);
    }
  };

  const updateReviewHandler = () => {
    !review && setShowReviewErrorText(true);

    // after 5s set showReviewErrorText to false
    errorTextTimeout = setTimeout(() => {
      setShowReviewErrorText(false);
    }, 2000);

    if (review) {
      setShowReviewForm(false);

      // close bottom sheet
      closeBottomSheet();

      // show snackbar
      setSnackbar({
        open: true,
        message: "Updating review...",
        type: "info",
        onUndo: handleSnackbarUndo,
      });

      snackbarTimeout = setTimeout(async () => {
        if (!isUndoClicked) {
          try {
            // find prev user review data from state
            // @ts-ignore
            const currentProductReviews = reviews[`${productID}`];
            const prevUserReview = currentProductReviews.find(
              (review: ReviewInterface) => review.userID === user?.id
            );

            // send data to server
            const response = await updateReview(
              {
                productID: prevUserReview.productID,
                userID: prevUserReview.userID,
                rating,
                comment: review,
              },
              prevUserReview._id
            );

            // update state
            if (response.status === 200) {
              setSnackbar({
                open: true,
                message: "Your review has been updated.",
                type: "success",
              });

              // update review state
              const newUserReview = {
                ...prevUserReview,
                rating,
                comment: review,
              };

              const reviewsPayload = {
                [`${productID}`]: [
                  // @ts-ignore
                  ...reviews[`${productID}`].filter(
                    (review: ReviewInterface) => review.userID !== user?.id
                  ),
                  newUserReview,
                ],
              };

              dispatch({
                type: "ADD_REVIEWS",
                payload: reviewsPayload,
              });
            }
          } catch (error) {
            console.log(error);
            // if status is not 200 then display a snackbar with error message
            setSnackbar({
              open: true,
              message: "Something went wrong. Please try again.",
              type: "error",
            });
          }
        }
        setIsUndoClicked(false);
      }, 4000);
    }
  };

  const deleteReviewHandler = async () => {
    // close bottom sheet
    closeBottomSheet();
    setShowDeleteReviewDialog(false);

    try {
      // find user review _id from review state
      // @ts-ignore
      const currentProductReviews = reviews[`${productID}`];
      const userReview = currentProductReviews.find(
        (review: ReviewInterface) => review.userID === user?.id
      );

      // send delete request to backend
      const response = await deleteReview(userReview._id);

      // if status is 200 then display a snackbar with success message
      if (response.status === 200) {
        setSnackbar({
          open: true,
          message: "Your review has been deleted.",
          type: "success",
        });
        setHasReviewed(false);

        // remove user review from review state
        const reviewsPayload = {
          [`${productID}`]: [
            // @ts-ignore
            ...reviews[`${productID}`].filter(
              (review: ReviewInterface) => review.userID !== user?.id
            ),
          ],
        };

        // update state
        dispatch({
          type: "ADD_REVIEWS",
          payload: reviewsPayload,
        });
      }
    } catch (error) {
      console.log(error);

      // set snackbar
      setSnackbar({
        open: true,
        message: "Something went wrong. Please try again.",
        type: "error",
      });
    }
  };

  useEffect(() => {
    const checkIfUserHasOrdered = async () => {
      const response = await getOrdersByUserIDAndProductID(
        user?.id!,
        productID!
      );
      const orders = response.data;

      if (orders.length > 0) {
        setHasOrdered(true);
      }
    };

    // create a function that checks if user has reviewed the product
    const checkIfUserHasReviewed = () => {
      // @ts-ignore
      const userReviews = reviews[`${productID}`];

      if (userReviews) {
        const userReview = userReviews.find(
          (review: ReviewInterface) => review.userID === user?.id
        );

        if (userReview) {
          setHasReviewed(true);
          setRating(userReview.rating);
          setReview(userReview.comment);
        }

        if (!userReview) {
          setHasReviewed(false);
        }
      }
    };

    if (user) {
      checkIfUserHasOrdered();
      checkIfUserHasReviewed();
    }

    return () => {
      if (errorTextTimeout) {
        clearTimeout(errorTextTimeout);
        clearTimeout(snackbarTimeout);
      }
    };
  }, []);

  return (
    <>
      <ReviewFormSC>
        {!user && (
          <SignInTextSC>
            Want to add a review?{" "}
            <Button styleType="tertiary" href={ROUTES.SIGN_IN} underlineLabel>
              Sign In
            </Button>
          </SignInTextSC>
        )}
        {user && !hasOrdered && (
          <PurchaseProductTextSC>
            <Button styleType="tertiary" disabled underlineLabel>
              Add Review
            </Button>
            <br />
            To add review, please purchase the product first
          </PurchaseProductTextSC>
        )}
        {user && hasOrdered && !hasReviewed && !showFormCard && (
          <AddReviewTextSC>
            Want to share your thoughts?{" "}
            <Button
              styleType="tertiary"
              clickHandler={handleAddReview}
              underlineLabel
            >
              Add Review
            </Button>
          </AddReviewTextSC>
        )}
        {user && hasReviewed && !showFormCard && (
          <Grow in>
            <ReviewContainerSC>
              <ReviewTitleSC>Your Review</ReviewTitleSC>
              <EditIconSC
                onClick={() =>
                  isLargeScreen
                    ? setShowFormCard(true)
                    : setIsUpdateReviewBottomSheetOpen(true)
                }
              >
                <EditIcon />
              </EditIconSC>
              <Review
                userID={user.id}
                username={user.username}
                comment={review}
                rating={rating}
                profileUrl={user?.profileUrl ?? null}
              />
              <Button
                styleType="tertiary"
                clickHandler={() => {
                  isLargeScreen
                    ? setShowDeleteReviewDialog(true)
                    : setIsDeleteReviewBottomSheetOpen(true);
                }}
                underlineLabel
              >
                Delete
              </Button>
            </ReviewContainerSC>
          </Grow>
        )}
        {/* FORM CARD FOR LARGE SCREEN - ALTERNATIVE TO BOTTOM SHEET */}
        {showFormCard && isLargeScreen && (
          <Fade in={showFormCard}>
            <FormCardSC>
              <FormCardCloseButtonSC>
                <CloseIcon onClick={() => setShowFormCard(false)} />
              </FormCardCloseButtonSC>
              <FormCardBodySC
                sx={{
                  transform: `translateX(${
                    rating && showReviewForm ? "-100%" : "0"
                  })`,
                }}
              >
                <FormCardRatingSC>
                  <FormCardRatingTitleSC>Rating</FormCardRatingTitleSC>
                  <RatingSelect rating={rating} setRating={setRating} />
                  {showRatingErrorText && (
                    <RatingErrorTextSC>
                      Please select a rating
                    </RatingErrorTextSC>
                  )}
                  <FormCardRatingButtonContainerSC>
                    <Button width="auto" clickHandler={handleRatingSubmit}>
                      Next
                    </Button>
                  </FormCardRatingButtonContainerSC>
                </FormCardRatingSC>
                <FormCardReviewSC>
                  <FormCardReviewTitleSC>Review</FormCardReviewTitleSC>
                  <ReviewTextArea
                    review={review}
                    setReview={setReview}
                    rows={5}
                  />
                  {showReviewErrorText && (
                    <ReviewErrorTextSC>
                      Please write your review before submitting
                    </ReviewErrorTextSC>
                  )}
                  <FormCardReviewButtonContainerSC>
                    <Button
                      styleType="secondary"
                      width="auto"
                      clickHandler={() => {
                        setShowReviewForm(false);
                      }}
                    >
                      Back
                    </Button>
                    <Button
                      width="auto"
                      clickHandler={
                        hasReviewed ? updateReviewHandler : addReviewHandler
                      }
                    >
                      {hasReviewed ? "Update Review" : "Submit Review"}
                    </Button>
                  </FormCardReviewButtonContainerSC>
                </FormCardReviewSC>
              </FormCardBodySC>
            </FormCardSC>
          </Fade>
        )}
      </ReviewFormSC>
      {/* DELETE REVIEW DIALOG */}
      <Dialog
        title="Delete Review"
        description="Are you sure you want to delete this review?"
        primaryButtonLabel="Delete Review"
        primaryButtonHandler={deleteReviewHandler}
        secondaryButtonLabel="Cancel"
        secondaryButtonHandler={() => setShowDeleteReviewDialog(false)}
        open={showDeleteReviewDialog}
        isDeleteOperation
      />
      {/* ADD REVIEW BOTTOM SHEET */}
      <BottomSheet
        open={isAddReviewBottomSheetOpen}
        onDismiss={closeBottomSheet}
        header={<BottomSheetTitleSC>Add Review</BottomSheetTitleSC>}
      >
        <BottomSheetBodySC
          sx={{
            transform: `translateX(${
              rating && showReviewForm ? "-100%" : "0"
            })`,
          }}
        >
          <BottomSheetRatingSC>
            <RatingSelect rating={rating} setRating={setRating} />
            {showRatingErrorText && (
              <RatingErrorTextSC>Please select a rating</RatingErrorTextSC>
            )}
            <RatingButtonContainerSC>
              <Button width="full" clickHandler={handleRatingSubmit}>
                Next
              </Button>
            </RatingButtonContainerSC>
          </BottomSheetRatingSC>
          <BottomSheetReviewSC>
            <ReviewTextArea review={review} setReview={setReview} />
            {showReviewErrorText && (
              <ReviewErrorTextSC>
                Please write your review before submitting
              </ReviewErrorTextSC>
            )}
            <ReviewButtonContainerSC>
              <Button width="full" clickHandler={addReviewHandler}>
                Submit Review
              </Button>
              <Button
                width="full"
                styleType="secondary"
                clickHandler={() => {
                  setShowReviewForm(false);
                }}
              >
                Back
              </Button>
            </ReviewButtonContainerSC>
          </BottomSheetReviewSC>
        </BottomSheetBodySC>
      </BottomSheet>
      {/* UPDATE REVIEW BOTTOM SHEET */}
      <BottomSheet
        open={isUpdateReviewBottomSheetOpen}
        onDismiss={closeBottomSheet}
        header={<BottomSheetTitleSC>Update Review</BottomSheetTitleSC>}
      >
        <BottomSheetBodySC
          sx={{
            transform: `translateX(${
              rating && showReviewForm ? "-100%" : "0"
            })`,
          }}
        >
          <BottomSheetRatingSC>
            <RatingSelect rating={rating} setRating={setRating} />
            {showRatingErrorText && (
              <RatingErrorTextSC>Please select a rating</RatingErrorTextSC>
            )}
            <RatingButtonContainerSC>
              <Button width="full" clickHandler={handleRatingSubmit}>
                Next
              </Button>
            </RatingButtonContainerSC>
          </BottomSheetRatingSC>
          <BottomSheetReviewSC>
            <ReviewTextArea review={review} setReview={setReview} />
            {showReviewErrorText && (
              <ReviewErrorTextSC>
                Please write your review before submitting
              </ReviewErrorTextSC>
            )}
            <ReviewButtonContainerSC>
              <Button width="full" clickHandler={updateReviewHandler}>
                Update Review
              </Button>
              <Button
                width="full"
                styleType="secondary"
                clickHandler={() => {
                  setShowReviewForm(false);
                }}
              >
                Back
              </Button>
            </ReviewButtonContainerSC>
          </BottomSheetReviewSC>
        </BottomSheetBodySC>
      </BottomSheet>
      {/* DELETE REVIEW BOTTOM SHEET */}
      <BottomSheet
        open={isDeleteReviewBottomSheetOpen}
        onDismiss={closeBottomSheet}
        header={<BottomSheetTitleSC>Delete Review</BottomSheetTitleSC>}
      >
        <DeleteReviewBottomSheetBodySC>
          <DeletePromptSC>
            Are you sure you want to delete this review?
          </DeletePromptSC>
          <Button
            styleType="primary"
            clickHandler={deleteReviewHandler}
            width="full"
          >
            Delete Review
          </Button>
          <Button
            styleType="secondary"
            clickHandler={closeBottomSheet}
            width="full"
          >
            Cancel
          </Button>
        </DeleteReviewBottomSheetBodySC>
      </BottomSheet>
      <SnackBar
        type={snackbar.type}
        message={snackbar.message}
        onClose={snackbarCloseHandler}
        open={snackbar.open}
        onUndo={snackbar.onUndo}
      />
    </>
  );
};

export default ReviewForm;