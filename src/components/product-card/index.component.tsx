import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { Box, useMediaQuery } from "@mui/material";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";

import Button from "../button/index.component";
import ProductInterface from "../../interfaces/product-interface";
import ProductCardInterface from "./index.interface";
import {
  ProductCardSC,
  CardContentSC,
  CardMediaSC,
  ProductContentHeaderSC,
  ProductContentBodySC,
  ProductNameSC,
  ProductPriceBigCardSC,
  ProductPriceSmallCardSC,
  AddToCartButtonContainerSC,
  AddToCartIconButtonSC,
  DefaultButtonContainerSC,
  RatingSC,
  ProductInfoSC,
} from "./index.styles";
import { formatPrice } from "../../utils/helpers";
import { selectCart } from "../../store/cart/cart.selector";

const ProductCard: FC<ProductCardInterface> = ({
  imgUrls,
  name,
  description,
  price,
  quantity,
  rating,
  reviews,
  stripeID,
  _id,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const addToCartHandler = () => {
    setIsAddedToCart((prevState) => !prevState);

    if (!isAddedToCart) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          imgUrls,
          name,
          description,
          price,
          quantity,
          reviews,
          stripeID,
          rating,
          _id,
        },
      });
    }

    if (isAddedToCart) {
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: {
          _id,
        },
      });
    }
  };

  const showDetailsHandler = () => {
    navigate(`/product/${_id}`);
  };

  useEffect(() => {
    if (_.isEmpty(cart)) {
      setIsAddedToCart(false);
    }

    if (!_.isEmpty(cart)) {
      const isProductInCart = () => {
        const matchedProduct = cart.find(
          (productInCart: ProductInterface) => _id === productInCart._id
        );
        return matchedProduct !== undefined;
      };
      setIsAddedToCart(isProductInCart());
    }
  }, [cart, _id]);

  return (
    <>
      <ProductCardSC>
        <CardMediaSC
          image={imgUrls[0]}
          title={name}
          onClick={showDetailsHandler}
        />
        <CardContentSC>
          <ProductContentHeaderSC onClick={showDetailsHandler}>
            <ProductNameSC gutterBottom variant="body1">
              {name}
            </ProductNameSC>
            <ProductPriceBigCardSC variant="body1" color="text.primary">
              ${formatPrice(price)}
            </ProductPriceBigCardSC>
          </ProductContentHeaderSC>
          <ProductContentBodySC>
            <ProductInfoSC>
              {isSmallScreen && <RatingSC type="short" showLabel={false} rating={rating} />}
              <ProductPriceSmallCardSC
                onClick={showDetailsHandler}
                variant="body1"
                color="text.primary"
              >
                ${formatPrice(price)}
              </ProductPriceSmallCardSC>
            </ProductInfoSC>
            {!isSmallScreen && <RatingSC type="long" rating={rating} showLabel={false} />}
            <AddToCartButtonContainerSC>
              <AddToCartIconButtonSC onClick={addToCartHandler}>
                {isAddedToCart ? <RemoveShoppingCart /> : <AddShoppingCart />}
              </AddToCartIconButtonSC>
              <DefaultButtonContainerSC>
                {isAddedToCart && (
                  <Box sx={{ width: "auto !important" }}>
                    <Button
                      type="default"
                      label="Remove from Cart"
                      clickHandler={addToCartHandler}
                    />
                  </Box>
                )}
                {!isAddedToCart && (
                  <Box sx={{ width: "auto !important" }}>
                    <Button
                      type="default"
                      label="Add to Cart"
                      clickHandler={addToCartHandler}
                    />
                  </Box>
                )}
              </DefaultButtonContainerSC>
            </AddToCartButtonContainerSC>
          </ProductContentBodySC>
        </CardContentSC>
      </ProductCardSC>
    </>
  );
};

export default ProductCard;
