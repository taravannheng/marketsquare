import { FC } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import ReviewListItemProps from './review-list-item.interface';
import { CommentSC, ContentSC, ListItemSC, MediaSC, ProductNameSC, RatingSC } from './review-list-item.styles';

import { selectProduct } from '../../store/product/product.selector';
import { ROUTES } from '../../utils/constants';

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
  const product = useSelector(selectProduct(review.productID));
  let productName = '';
  let image = '';
  let imageTitle = '';
  let ratingText = getRatingText(review.rating);

  if (product) {
    image = product?.imgUrls[0] ?? '';
    imageTitle = product?.name ?? '';
    productName = product?.name ?? '';
  }

  const redirectToProductDetailsHandler = () => {
    navigate(`/product/${review.productID}`);
  }

  return (
    <ListItemSC onClick={redirectToProductDetailsHandler}>
      <MediaSC image={image} title={imageTitle} />
      <ContentSC>
        <ProductNameSC>{productName}</ProductNameSC>
        <RatingSC>{ratingText}</RatingSC>
        <CommentSC>{review.comment}</CommentSC>
      </ContentSC>
    </ListItemSC>
  )
}

export default ReviewListItem;