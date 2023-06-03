import { FC, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
import { Box, useMediaQuery } from "@mui/material";
import { AddShoppingCart, RemoveShoppingCart } from "@mui/icons-material";
import CartContext from "../../contexts/cart-context";

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
} from "./index.styles";
import { formatPrice } from "../../utils/helpers";

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
  const { cart, setCart } = useContext(CartContext);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const navigate = useNavigate();

  const addToCartHandler = () => {
    setIsAddedToCart((prevState) => !prevState);

    if (!isAddedToCart) {
      setCart((prevProducts: ProductInterface[]) => [
        ...prevProducts,
        {
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
      ]);
    }

    if (isAddedToCart) {
      setCart((prevProducts: ProductInterface[]) => {
        const updatedProducts = prevProducts.filter(
          (productInCart) => productInCart._id !== _id
        );
        return updatedProducts;
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
            <ProductPriceSmallCardSC
              onClick={showDetailsHandler}
              variant="body1"
              color="text.primary"
            >
              ${formatPrice(price)}
            </ProductPriceSmallCardSC>
            {!isSmallScreen && <RatingSC rating={rating} showLabel={false} />}
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
