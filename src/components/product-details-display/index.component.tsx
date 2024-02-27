import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBackIosRounded } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import _ from "lodash";
import Cookies from "js-cookie";

import SlideShow from "../slideshow/index.component";
import SeeMoreText from "../see-more-text/see-more-text.component";
import Rating from "../rating/index.component";
import Button from "../button/button.component";
import ProductDetailsDisplayInterface from "./index.interface";
import ProductInterface from "../../interfaces/product-interface";
import {
  BackNavSC,
  BodySC,
  DetailsContainerSC,
  ProductDescriptionSC,
  ProductDetailsDisplaySC,
  ProductPriceSC,
  ProductNameSC,
  SlideShowContainerSC,
  RatingContainerSC,
  AddToCartButtonSC,
  ProductNameContainerSC,
  WishlistIconContainerSC,
  WishlistBorderIconSC,
  WishlistFilledIconSC,
} from "./index.styles";
import { adjustCloudinaryImgSize, formatPrice } from "../../utils/helpers";
import { selectCart } from "../../store/cart/cart.selector";
import { selectUser } from "../../store/user/user.selector";
import { selectWishlist } from "../../store/wishlist/wishlist.selector";
import {
  createWishlist,
  updateWishlist,
} from "../../apis/wishlists/wishlists.api";
import { COLORS, BREAKPOINTS } from "../../styles/styles";
import Dialog from "../dialog/dialog.component";
import { ROUTES } from "../../utils/constants";
import WISHLIST_ACTION_TYPES from "../../store/wishlist/wishlist.types";
import SnackBar from "../snackbar/snackbar.component";

const ProductDetailsDisplay: FC<ProductDetailsDisplayInterface> = ({
  product,
}) => {
  const isBigScreen = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`);
  const buttonWidth = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`)
    ? "auto"
    : "full";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const wishlist = useSelector(selectWishlist(product._id));
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const slideshowData = !_.isEmpty(product)
    ? product.imgUrls.map((imgUrl: string) => ({ imgUrl }))
    : [];
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
  }>({
    open: false,
    message: "",
    type: "info",
  });

  // ADJUST SLIDESHOW IMAGE SIZE
  const DEFAULT_IMG_SIZE = 800;
  const imgUrls = slideshowData.map((item) => {
    return { imgUrl: adjustCloudinaryImgSize(item.imgUrl, DEFAULT_IMG_SIZE) };
  });

  // HANDLERS
  const goBack = () => {
    navigate(-1);
  };

  const wishlistHandler = async (e: any) => {
    e.stopPropagation();

    // check if session is expired
    const token = Cookies.get("jwt");

    if (user && !token) {
      // reset user state to null
      dispatch({
        type: "SET_USER",
        payload: null,
      });

      // reset isAddedToWishlist state to false
      setIsAddedToWishlist(false);

      // display snackbar
      setSnackbar({
        open: true,
        message: "Your session has expired. Please sign in again.",
        type: "error",
      });

      return;
    }

    if (!user && !token) {
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
      setIsAddedToWishlist(true);

      try {
        const response = await createWishlist(product._id, token);

        const { wishlist: createdWishlist } = response.data;

        dispatch({
          type: WISHLIST_ACTION_TYPES.ADD_WISHLIST,
          payload: createdWishlist,
        });
      } catch (error: any) {
        console.log(error);
      }
    }
  };

  const addToCartHandler = () => {
    setIsAddedToCart((prevState) => !prevState);

    if (!isAddedToCart) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...product,
        },
      });
    }

    if (isAddedToCart) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          _id: product._id,
        },
      });
    }
  };

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  useEffect(() => {
    if (_.isEmpty(cart)) {
      setIsAddedToCart(false);
    }

    if (!_.isEmpty(cart)) {
      const isProductInCart = () => {
        const matchedProduct = cart.find(
          (productInCart: ProductInterface) => product._id === productInCart._id
        );
        return matchedProduct !== undefined;
      };

      setIsAddedToCart(isProductInCart());
    }
  }, [cart, product]);

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
      {
        <ProductDetailsDisplaySC>
          <BackNavSC>
            <Button
              styleType="tertiary"
              icon={<ArrowBackIosRounded />}
              onClick={goBack}
            >
              Back
            </Button>
          </BackNavSC>
          {!_.isEmpty(product) && (
            <BodySC>
              <SlideShowContainerSC>
                <SlideShow indicatorType="dot" data={imgUrls} />
              </SlideShowContainerSC>
              <DetailsContainerSC>
                <ProductNameContainerSC>
                  <ProductNameSC>{product.name}</ProductNameSC>
                  {!isBigScreen && (
                    <WishlistIconContainerSC onClick={wishlistHandler}>
                      <WishlistBorderIconSC
                        sx={{
                          transform: `${
                            isAddedToWishlist
                              ? "translateY(-100%)"
                              : "translateY(0%)"
                          } !important`,
                        }}
                      >
                        <FavoriteBorderIcon />
                      </WishlistBorderIconSC>
                      <WishlistFilledIconSC
                        sx={{
                          transform: `${
                            isAddedToWishlist
                              ? "translateY(-100%)"
                              : "translateY(0%)"
                          } !important`,
                        }}
                      >
                        <FavoriteIcon />
                      </WishlistFilledIconSC>
                    </WishlistIconContainerSC>
                  )}
                </ProductNameContainerSC>
                <ProductPriceSC>${formatPrice(product.price)}</ProductPriceSC>
                <RatingContainerSC>
                  <Rating type="long" showLabel rating={product.rating} />
                </RatingContainerSC>
                <ProductDescriptionSC>
                  {product.description.length >= 250 ? (
                    <SeeMoreText defaultTextLength={250}>
                      {product.description}
                    </SeeMoreText>
                  ) : (
                    product.description
                  )}
                </ProductDescriptionSC>
                <AddToCartButtonSC>
                  <Button
                    styleType="primary"
                    onClick={addToCartHandler}
                    width={buttonWidth}
                  >
                    {isAddedToCart ? "Added to Cart" : "Add to Cart"}
                  </Button>
                  {isBigScreen && (
                    <Button
                      styleType="secondary"
                      onClick={wishlistHandler}
                      width={buttonWidth}
                    >
                      {isAddedToWishlist
                        ? "Added to Wishlist"
                        : "Add to Wishlist"}
                    </Button>
                  )}
                </AddToCartButtonSC>
              </DetailsContainerSC>
            </BodySC>
          )}
        </ProductDetailsDisplaySC>
      }
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
      <SnackBar
        type={snackbar.type}
        message={snackbar.message}
        onClose={snackbarCloseHandler}
        open={snackbar.open}
      />
    </>
  );
};

export default ProductDetailsDisplay;
