import { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import {
  ActionsSC,
  CartIconButtonContainerSC,
  DetailsSC,
  MediaSC,
  PriceSC,
  TitleSC,
  WishlistItemSC,
} from "./wishlist-item.styles";

import IconButton from "../icon-button/icon-button.component";
import Dialog from "../dialog/dialog.component";
import SnackBar from "../snackbar/snackbar.component";

import WishlistInterface from "../../interfaces/wishlist.interface";
import ProductInterface from "../../interfaces/product-interface";
import { selectProduct } from "../../store/product/product.selector";
import { selectUser } from "../../store/user/user.selector";
import { selectCart } from "../../store/cart/cart.selector";
import { selectWishlist } from "../../store/wishlist/wishlist.selector";
import WISHLIST_ACTION_TYPES from "../../store/wishlist/wishlist.types";
import USER_ACTION_TYPES from "../../store/user/user.types";
import { updateWishlist } from "../../apis/wishlists/wishlists.api";

const WishlistItem: FC<WishlistInterface> = ({
  _id,
  userID,
  productID,
  createdAt,
  isInWishlist,
  updatedAt,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(selectProduct(productID));
  const cart = useSelector(selectCart);
  const user = useSelector(selectUser);
  const wishlist = useSelector(selectWishlist(productID));
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
  }>({
    open: false,
    message: "",
    type: "info",
  });

  const redirectHandler = () => {
    navigate(`/product/${productID}`);
  };

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  const deleteHandler = async (e: any) => {
    e.stopPropagation();

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

    setShowDialog(true);
  };

  const addToCartHandler = (e: any) => {
    e.stopPropagation();

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
          _id: product!._id,
        },
      });
    }
  };

  const removeFromWishlistHandler = async () => {
    // update state
    wishlist!.isInWishlist = false;

    dispatch({
      type: WISHLIST_ACTION_TYPES.REMOVE_WISHLIST,
      payload: wishlist,
    });

    try {
      const token = Cookies.get("jwt");
      await updateWishlist(wishlist!, token);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (_.isEmpty(cart)) {
      setIsAddedToCart(false);
    }

    if (!_.isEmpty(cart)) {
      const isProductInCart = () => {
        const matchedProduct = cart.find(
          (productInCart: ProductInterface) =>
            product!._id === productInCart._id
        );
        return matchedProduct !== undefined;
      };

      setIsAddedToCart(isProductInCart());
    }
  }, [cart, product]);

  return (
    <>
      {!_.isEmpty(product) && (
        <WishlistItemSC onClick={redirectHandler}>
          <MediaSC image={product.imgUrls[0]} title={product.name} />
          <DetailsSC>
            <TitleSC>{product?.name}</TitleSC>
            <PriceSC>${product?.price}</PriceSC>
          </DetailsSC>
          <ActionsSC>
            <IconButton
              icon={<DeleteIcon />}
              clickHandler={deleteHandler}
              isDestructive
            />
            <CartIconButtonContainerSC>
              <IconButton
                icon={<AddShoppingCartIcon />}
                clickHandler={addToCartHandler}
                sx={{
                  transform: `${
                    isAddedToCart ? "translateY(-100%)" : "translateY(0%)"
                  }`,
                  transition: "transform 0.3s ease-in-out",
                }}
              />
              <IconButton
                icon={<RemoveShoppingCartIcon />}
                clickHandler={addToCartHandler}
                sx={{
                  transform: `${
                    isAddedToCart ? "translateY(-100%)" : "translateY(0%)"
                  }`,
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </CartIconButtonContainerSC>
          </ActionsSC>
        </WishlistItemSC>
      )}
      <Dialog
        title="Remove from Wishlist?"
        description="Are you sure you want to remove this item from Wishlist?"
        primaryButtonLabel="Remove"
        onClickPrimaryButton={removeFromWishlistHandler}
        secondaryButtonLabel="Cancel"
        onClickSecondaryButton={() => setShowDialog(false)}
        open={showDialog}
        icon={<FavoriteIcon />}
        isDeleteOperation
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

export default WishlistItem;
