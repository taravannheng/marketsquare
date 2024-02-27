import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Rating from "../rating/index.component";
import RelatedProductCardProps from "./index.interface";
import {
  CardContentSC,
  CardMediaSC,
  ProductNameSC,
  ProductPriceSC,
  RelatedProductCardSC,
} from "./index.styles";
import _ from "lodash";
import { adjustCloudinaryImgSize } from "../../utils/helpers";

const RelatedProductCard: FC<RelatedProductCardProps> = ({
  product,
  width,
  height,
  backgroundColor,
}) => {
  const navigate = useNavigate();
  const { name, price, rating } = product;

  // ADJUST IMAGE SIZE
  const DEFAULT_IMG_SIZE = 240;
  const imgUrl = adjustCloudinaryImgSize(product.imgUrls[0], DEFAULT_IMG_SIZE);

  // HANDLERS
  const handleShowDetails = () => {
    navigate(`/product/${product._id}`);
  };

  return (
    <RelatedProductCardSC
      sx={{
        width: `${width && width} !important`,
        height: `${height && height} !important`,
        backgroundColor: `${backgroundColor && backgroundColor} !important`,
      }}
      onClick={handleShowDetails}
    >
      {!_.isEmpty(product) && (
        <>
          <CardMediaSC image={imgUrl} />
          <CardContentSC>
            <ProductNameSC>{name}</ProductNameSC>
            <ProductPriceSC>${price}</ProductPriceSC>
            <Rating type="long" showLabel={false} rating={rating} />
          </CardContentSC>
        </>
      )}
    </RelatedProductCardSC>
  );
};

export default RelatedProductCard;
