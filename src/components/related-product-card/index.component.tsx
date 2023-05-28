import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Rating from "../rating/index.component";
import RelatedProductCardInterface from "./index.interface";
import {
  CardContentSC,
  CardMediaSC,
  ProductNameSC,
  ProductPriceSC,
  RelatedProductCardSC,
} from "./index.styles";
import _ from "lodash";

const RelatedProductCard: FC<RelatedProductCardInterface> = ({
  product,
  width,
  height,
  backgroundColor,
}) => {
  const navigate = useNavigate();

  const showDetailsHandler = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <RelatedProductCardSC
      sx={{
        width: `${width && width} !important`,
        height: `${height && height} !important`,
        backgroundColor: `${backgroundColor && backgroundColor} !important`,
      }}
      onClick={showDetailsHandler}
    >
      {!_.isEmpty(product) && (
        <>
          <CardMediaSC image={product.imgUrls[0]} />
          <CardContentSC>
            <ProductNameSC>{product.name}</ProductNameSC>
            <ProductPriceSC>${product.price}</ProductPriceSC>
            <Rating showLabel={false} rating={product.rating} />
          </CardContentSC>
        </>
      )}
    </RelatedProductCardSC>
  );
};

export default RelatedProductCard;
