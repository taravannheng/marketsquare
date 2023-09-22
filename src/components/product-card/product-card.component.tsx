import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Cookies from "js-cookie";
import _ from "lodash";

import ProductCardInterface from "./product-card.interface";
import {
  ProductCardSC,
  CardContentSC,
  CardMediaSC,
  ProductNameSC,
  ProductPriceSC,
  CardMediaContainerSC,
  ProductNameContainerSC,
  WishlistBorderIconSC,
  WishlistFilledIconSC,
  WishlistIconContainerSC,
} from "./product-card.styles";
import { formatPrice, adjustCloudinaryImgSize } from "../../utils/helpers";
import { selectUser } from "../../store/user/user.selector";
import { selectWishlist } from "../../store/wishlist/wishlist.selector";
import { createWishlist, updateWishlist } from "../../apis/wishlists/wishlists.api";
import Dialog from "../dialog/dialog.component";
import { ROUTES } from "../../utils/constants";
import WISHLIST_ACTION_TYPES from "../../store/wishlist/wishlist.types";

const ProductCard: FC<ProductCardInterface> = ({
  imgUrls,
  name,
  price,
  _id,
}) => {
  const token = Cookies.get("jwt");
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const wishlist = useSelector(selectWishlist(_id));
  const dispatch = useDispatch();
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);

  // SET IMG SIZE
  const MAX_IMG_SIZE = 640;
  const firstImgUrl = imgUrls[0];
  const imgUrl = adjustCloudinaryImgSize(firstImgUrl, MAX_IMG_SIZE);

  const showDetailsHandler = () => {
    navigate(`/product/${_id}`);
  };

  const wishlistHandler = async (e: any) => {
    e.stopPropagation();

    if (!user) {
      setShowLoginDialog(true);
      return;
    }

    // update state
    if (isAddedToWishlist && wishlist) {
      wishlist!.isInWishlist = false;

      dispatch({
        type: WISHLIST_ACTION_TYPES.REMOVE_WISHLIST,
        payload: wishlist,
      });

      try {
        await updateWishlist(wishlist!, token);
      } catch (error: any) {
        console.log(error);
      }
    }

    if (!isAddedToWishlist) {
      // set isAddedToWishlist to true for better ux
      setIsAddedToWishlist(true);

      try {
        const response = await createWishlist(_id, token);

        const {wishlist: createdWishlist} = response.data;

        dispatch({
          type: WISHLIST_ACTION_TYPES.ADD_WISHLIST,
          payload: createdWishlist,
        });
      } catch (error: any) {
        console.log(error);
      }    
    }
  };

  useEffect(() => {
    if (wishlist) {
      setIsAddedToWishlist(wishlist.isInWishlist);
    }

    if (!wishlist) {
      setIsAddedToWishlist(false);
    }
  }, [wishlist]);

  return (
    <>
      <ProductCardSC onClick={showDetailsHandler}>
        <CardMediaContainerSC>
          <CardMediaSC image={imgUrl} title={name} />
        </CardMediaContainerSC>
        <CardContentSC>
          <ProductNameContainerSC>
            <ProductNameSC gutterBottom variant="body1">
              {name}
            </ProductNameSC>
            <WishlistIconContainerSC onClick={wishlistHandler}>
              <WishlistBorderIconSC
                  sx={{
                    transform: `${isAddedToWishlist ? 'translateY(-100%)' : 'translateY(0%)'} !important`
                  }}
                >
                  <FavoriteBorderIcon />
                </WishlistBorderIconSC>
                <WishlistFilledIconSC
                  sx={{
                    transform: `${isAddedToWishlist ? 'translateY(-100%)' : 'translateY(0%)'} !important`
                  }}
                >
                  <FavoriteIcon />
                </WishlistFilledIconSC>
            </WishlistIconContainerSC>
              
          </ProductNameContainerSC>
          <ProductPriceSC variant="body1" color="text.primary">
            ${formatPrice(price)}
          </ProductPriceSC>
        </CardContentSC>
      </ProductCardSC>
      <Dialog
        title="Add to Wishlist"
        description="Sign in to add this product to your wishlist"
        primaryButtonLabel="Sign In"
        primaryHref={ROUTES.SIGN_IN}
        secondaryButtonLabel="Cancel"
        secondaryButtonHandler={() => setShowLoginDialog(false)}
        open={showLoginDialog}
        icon={<FavoriteIcon />}
      />
    </>
  );
};

export default ProductCard;
