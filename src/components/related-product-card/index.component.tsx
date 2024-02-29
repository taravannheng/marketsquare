import { FC } from "react";
import { useNavigate } from "react-router-dom";

// 3rd-party dependencies imports
import _ from "lodash";

// component imports
import Rating from "../rating/index.component";

// props or interfaces imports
import RelatedProductCardInterface from "./index.interface";

// styling imports
import {
  CardContentSC,
  CardMediaSC,
  ProductNameSC,
  ProductPriceSC,
  RelatedProductCardSC,
} from "./index.styles";

// constants or helper functions imports
import { adjustCloudinaryImgSize } from "../../utils/helpers";

const RelatedProductCard: FC<RelatedProductCardInterface> = ({
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
