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

// util imports
import { ALERT_MESSAGES, SNACKBAR_MESSAGES } from "../constants";

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

export const getAvatarSize = (size) => {
  const sizes = {
    small: "28px",
    medium: "32px",
    large: "44px"
  };
  
  return sizes[size] || "32px";
};

export const getLogoSize = (isBigScreen = true) => {
  const smallLogoSize = "32";
  const bigLogoSize = "44";

  return isBigScreen ? bigLogoSize : smallLogoSize;
}

export const getIconButtonIconSize = (size) => {
  let width, height;

  switch (size) {
    case "small":
      width = "24px";
      height = "24px";
      break;
    case "medium":
      width = "32px";
      height = "32px";
      break;
    case "large":
      width = "44px";
      height = "44px";
      break;
    default:
      width = "44px";
      height = "44px";
      break;
  }

  return {width, height};
}

export const getRatingLabel = (hoveredStar) => {
  let label = '';

  switch (hoveredStar) {
    case 1:
      label = 'Poor';
      break;
    case 2:
      label = 'Fair';
      break;
    case 3:
      label = 'Average';
      break;
    case 4:
      label = 'Good';
      break;
    case 5:
      label = 'Excellent';
      break;
    default:
      label = 'How would you rate this product?';
      break;
  }

  return label;
}

export const getRatingText = (rating) => {
  let label = "";

  switch (rating) {
    case 1:
      label = "Poor";
      break;
    case 2:
      label = "Fair";
      break;
    case 3:
      label = "Average";
      break;
    case 4:
      label = "Good";
      break;
    case 5:
      label = "Excellent";
      break;
    default:
      label = "";
      break;
  }

  return `Your rating: ${rating} (${label})`;
};

export const getAlertMessages = (type) => {
  return ALERT_MESSAGES[type] ?? 'N/A';
}

export const getSnackbarMessages = (type) => {
  return SNACKBAR_MESSAGES[type];
}

export const getAspectRatio = (aspectRatio) => {
  let paddingBottom = "56.25%"; // 16:9 Default Aspect Ratio

  switch (aspectRatio) {
    case "1:1":
      paddingBottom = "100%";
      break;
    case "4:3":
      paddingBottom = "75%";
      break;
    case "16:9":
      paddingBottom = "56.25%";
      break;
    case "21:9":
      paddingBottom = "42.86%";
      break;
    default:
      paddingBottom = "56.25%";
      break;
  }

  return paddingBottom;
}