import _ from "lodash";

// asset imports
import AmexLogo from "../../assets/cards/amex.png";
import UnionPayLogo from "../../assets/cards/unionpay.png";
import JCBLogo from "../../assets/cards/jcb.png";
import EftposLogo from "../../assets/cards/eftpos.png";
import DiscoverLogo from "../../assets/cards/discover.png";
import DinersLogo from "../../assets/cards/diners.png";
import VisaLogo from "../../assets/cards/visa.png";
import MastercardLogo from "../../assets/cards/mastercard.png";

export const getCardLogo = (cardBrand) => {
  let cardLogo = "";

  switch (cardBrand) {
    case "unionpay":
      cardLogo = UnionPayLogo;
      break;
    case "jcb":
      cardLogo = JCBLogo;
      break;
    case "eftpos":
      cardLogo = EftposLogo;
      break;
    case "discover":
      cardLogo = DiscoverLogo;
      break;
    case "diners":
      cardLogo = DinersLogo;
      break;
    case "amex":
      cardLogo = AmexLogo;
      break;
    case "visa":
      cardLogo = VisaLogo;
      break;
    case "mastercard":
      cardLogo = MastercardLogo;
      break;
    default:
      cardLogo = "";
  }

  return cardLogo;
};

export const formatPrice = (price) => {
  const decimalPart = price % 1;
  if (decimalPart === 0) {
    return price.toFixed(0);
  }

  return price.toFixed(2);
};

export const getProductsPerPage = (currentPage, productsPerPage, products) => {
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  let slicedProducts = !_.isEmpty(products)
    ? products.slice(startIndex, endIndex)
    : [];

  return slicedProducts;
};

export const adjustCloudinaryImgSize = (url, width) => {
  const delimiter = '/upload';
  const index = url.indexOf(delimiter) + delimiter.length;

  const endpoint = url.substring(0, index);
  const public_id = url.substring(index);
  const optimization = `/c_scale,w_${width}`;

  const newUrl = width === 0 ? `${endpoint}${public_id}` : `${endpoint}${optimization}${public_id}`;

  return newUrl;
}
