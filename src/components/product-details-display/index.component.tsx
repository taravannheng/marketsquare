import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { ArrowBackIosRounded } from "@mui/icons-material";
import _ from "lodash";

import SlideShow from "../slideshow/index.component";
import SeeMoreText from "../see-more-text/see-more-text.component";
import Rating from "../rating/index.component";
import Button from "../button/index.component";
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
} from "./index.styles";
import { adjustCloudinaryImgSize, formatPrice } from "../../utils/helpers";
import { selectCart } from "../../store/cart/cart.selector";
import { COLORS } from "../../styles/styles";

const ProductDetailsDisplay: FC<ProductDetailsDisplayInterface> = ({
  product,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");
  const navigate = useNavigate();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const slideshowData = !_.isEmpty(product)
    ? product.imgUrls.map((imgUrl: string) => ({ imgUrl }))
    : [];

  // ADJUST SLIDESHOW IMAGE SIZE
  const DEFAULT_IMG_SIZE = 800;
  const imgUrls = slideshowData.map((item) => {
    return { imgUrl: adjustCloudinaryImgSize(item.imgUrl, DEFAULT_IMG_SIZE) };
  });

  // HANDLERS
  const goBack = () => {
    navigate(-1);
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

  return (
    <>
      {
        <ProductDetailsDisplaySC>
          <BackNavSC>
            <Button
              width="102px"
              height="40px"
              styleType="icon"
              actionType="button"
              icon={<ArrowBackIosRounded />}
              label="Back"
              clickHandler={goBack}
            />
          </BackNavSC>
          {!_.isEmpty(product) && (
            <BodySC>
              <SlideShowContainerSC>
                {isSmallScreen && (
                  <SlideShow indicatorType="dot" data={imgUrls} />
                )}
                {!isSmallScreen && (
                  <SlideShow indicatorType="number" data={imgUrls} />
                )}
              </SlideShowContainerSC>
              <DetailsContainerSC>
                <ProductNameSC>{product.name}</ProductNameSC>
                <ProductPriceSC>${formatPrice(product.price)}</ProductPriceSC>
                <Rating type="long" showLabel rating={product.rating} />
                <ProductDescriptionSC>
                  <SeeMoreText defaultTextLength={250}>{product.description}</SeeMoreText>
                </ProductDescriptionSC>
                <Button
                  width="200px"
                  styleType="default"
                  actionType="button"
                  label={isAddedToCart ? "Remove from Cart" : "Add to Cart"}
                  clickHandler={addToCartHandler}
                  backgroundColor={COLORS.PRIMARY.P500}
                  labelColor={COLORS.NEUTRAL.N0}
                  boldLabel
                />
              </DetailsContainerSC>
            </BodySC>
          )}
        </ProductDetailsDisplaySC>
      }
    </>
  );
};

export default ProductDetailsDisplay;
