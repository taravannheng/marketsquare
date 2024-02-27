import { FC } from "react";
import { useNavigate } from "react-router-dom";

import ProductCardProps from "./product-card.interface";
import {
  ProductCardSC,
  CardContentSC,
  CardMediaSC,
  ProductNameSC,
  ProductPriceSC,
  CardMediaContainerSC,
} from "./product-card.styles";
import { formatPrice, adjustCloudinaryImgSize } from "../../utils/helpers";

const ProductCard: FC<ProductCardProps> = ({
  imgUrls,
  name,
  price,
  _id,
}) => {
  const navigate = useNavigate();

  // SET IMG SIZE
  const MAX_IMG_SIZE = 640;
  const firstImgUrl = imgUrls[0];
  const imgUrl = adjustCloudinaryImgSize(firstImgUrl, MAX_IMG_SIZE);

  const showDetailsHandler = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <>
      <ProductCardSC onClick={showDetailsHandler}>
        <CardMediaContainerSC>
          <CardMediaSC image={imgUrl} title={name} />
        </CardMediaContainerSC>
        <CardContentSC>
            <ProductNameSC gutterBottom variant="body1">
              {name}
            </ProductNameSC>
          <ProductPriceSC variant="body1" color="text.primary">
            ${formatPrice(price)}
          </ProductPriceSC>
        </CardContentSC>
      </ProductCardSC>
    </>
  );
};

export default ProductCard;
