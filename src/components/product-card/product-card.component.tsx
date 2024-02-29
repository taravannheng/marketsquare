import { FC } from "react";
import { useNavigate } from "react-router-dom";

// props or interfaces imports
import ProductCardInterface from "./product-card.interface";

// styling imports
import {
  ProductCardSC,
  CardContentSC,
  CardMediaSC,
  ProductNameSC,
  ProductPriceSC,
  CardMediaContainerSC,
} from "./product-card.styles";

// constants or helper functions imports
import { formatPrice, adjustCloudinaryImgSize } from "../../utils/helpers";

const ProductCard: FC<ProductCardInterface> = ({
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
