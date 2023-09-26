import { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

import ReviewListItemProps from './review-list-item.interface';
import { CommentSC, ContentSC, ListItemSC, MediaSC, ProductNameSC, RatingSC } from './review-list-item.styles';

import SnackBar from '../snackbar/snackbar.component';
import { selectProduct } from '../../store/product/product.selector';
import { selectUser } from '../../store/user/user.selector';
import USER_ACTION_TYPES from '../../store/user/user.types';

const getRatingText = (rating: number) => {
  let label = '';

  switch (rating) {
    case 1:
      label = 'Poor';
      break;
    case 2:
      label = 'Fair';
      break;
    case 3:
      label = 'Average';
      break;
    case 4:
      label = 'Good';
      break;
    case 5:
      label = 'Excellent';
      break;
    default:
      label = '';
      break;
  }

  return `Your rating: ${rating} (${label})`; 
}

const ReviewListItem: FC<ReviewListItemProps> = ({ review }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct(review.productID));
  const user = useSelector(selectUser);
  let productName = '';
  let image = '';
  let imageTitle = '';
  let ratingText = getRatingText(review.rating);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
  }>({
    open: false,
    message: "",
    type: "info",
  });

  if (product) {
    image = product?.imgUrls[0] ?? '';
    imageTitle = product?.name ?? '';
    productName = product?.name ?? '';
  }

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  const redirectToProductDetailsHandler = () => {
    // check if session is expired
    const token = Cookies.get("jwt");

    if (!token && user) {
      // display snackbar
      setSnackbar({
        open: true,
        message: "Your session has expired. Please sign in again.",
        type: "error",
      });

      // reset user state to null
      setTimeout(() => {
        dispatch({
          type: USER_ACTION_TYPES.SET_USER,
          payload: null,
        });
      }, 2000);

      return;
    }

    navigate(`/product/${review.productID}`);
  }

  return (
    <>
    <ListItemSC onClick={redirectToProductDetailsHandler}>
      <MediaSC image={image} title={imageTitle} />
      <ContentSC>
        <ProductNameSC>{productName}</ProductNameSC>
        <RatingSC>{ratingText}</RatingSC>
        <CommentSC>{review.comment}</CommentSC>
      </ContentSC>
    </ListItemSC>
      <SnackBar
        type={snackbar.type}
        message={snackbar.message}
        onClose={snackbarCloseHandler}
        open={snackbar.open}
      />
    </>
    
  )
}

export default ReviewListItem;