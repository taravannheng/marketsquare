import { FC, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { ArrowBackIosRounded } from "@mui/icons-material";
import _ from "lodash";

import SlideShow from "../slideshow/index.component";
import Rating from "../rating/index.component";
import Button from "../button/index.component";
import ProductDetailsDisplayInterface from "./index.interface";
import ProductInterface from "../../interfaces/product-interface";
import CartContext from "../../contexts/cart-context";
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

const ProductDetailsDisplay: FC<ProductDetailsDisplayInterface> = ({
  product,
}) => {
  const isSmallScreen = useMediaQuery("(max-width: 1080px)");
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const slideshowData = !_.isEmpty(product)
    ? product.imgUrls.map((imgUrl: string) => ({ imgUrl }))
    : [];

  const goBack = () => {
    navigate(-1);
  };

  const addToCartHandler = () => {
    setIsAddedToCart((prevState) => !prevState);

    if (!isAddedToCart) {
      setCart((prevProducts: ProductInterface[]) => [
        ...prevProducts,
        {
          ...product,
        },
      ]);
    }

    if (isAddedToCart) {
      setCart((prevProducts: ProductInterface[]) => {
        const updatedProducts = prevProducts.filter(
          (productInCart) => productInCart._id !== product._id
        );
        return updatedProducts;
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
      {!_.isEmpty(product) && (
        <ProductDetailsDisplaySC>
          <BackNavSC>
            <Button
              width="102px"
              height="40px"
              type="icon"
              icon={<ArrowBackIosRounded />}
              label="Back"
              clickHandler={goBack}
            />
          </BackNavSC>
          <BodySC>
            <SlideShowContainerSC>
              {isSmallScreen && (
                <SlideShow indicatorType="dot" data={slideshowData} />
              )}
              {!isSmallScreen && (
                <SlideShow indicatorType="number" data={slideshowData} />
              )}
            </SlideShowContainerSC>
            <DetailsContainerSC>
              <ProductNameSC>{product.name}</ProductNameSC>
              <ProductPriceSC>${product.price}</ProductPriceSC>
              <Rating showLabel rating={product.rating} />
              <ProductDescriptionSC>{product.description}</ProductDescriptionSC>
              <Button
                width="180px"
                type="default"
                label={isAddedToCart ? "Remove from Cart" : "Add to Cart"}
                clickHandler={addToCartHandler}
              />
            </DetailsContainerSC>
          </BodySC>
        </ProductDetailsDisplaySC>
      )}
    </>
  );
};

export default ProductDetailsDisplay;
