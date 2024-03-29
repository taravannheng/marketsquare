import _ from "lodash";

import AmexLogo from "../assets/cards/amex.png";
import UnionPayLogo from "../assets/cards/unionpay.png";
import JCBLogo from "../assets/cards/jcb.png";
import EftposLogo from "../assets/cards/eftpos.png";
import DiscoverLogo from "../assets/cards/discover.png";
import DinersLogo from "../assets/cards/diners.png";
import VisaLogo from "../assets/cards/visa.png";
import MastercardLogo from "../assets/cards/mastercard.png";

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

export const checkUsernameLength = (username) => {
  return username.length >= 4 && username.length <= 20;
};

export const checkUsernameCharacters = (username) => {
  const regex = /^[a-zA-Z0-9_ ]+$/;
  return regex.test(username);
};

export const checkUsernameSpaces = (username) => {
  const regex = /\s/;

  return !regex.test(username) && username.length > 0;
};

export const checkUsername = (username) => {
  const isValidLength = checkUsernameLength(username);
  const isValidCharacters = checkUsernameCharacters(username);

  const usernameStatus = {
    isValid: isValidLength && isValidCharacters,
    validityDetails: {
      isValidLength,
      isValidCharacters,
    },
  };

  return usernameStatus;
};

export const checkEmail = (email) => {
  // extract different portions of email
  const username = email?.split("@")[0] ?? null;
  const domain = email?.split("@")[1] ?? null;

  // regex
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const usernameRegex = /^[a-zA-Z0-9._-]+$/;
  const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const atRegex = /@/;

  // check email validity
  const isValidEmail = emailRegex.test(email);
  const isValidUsername = usernameRegex.test(username);
  const isValidDomain = domainRegex.test(domain);
  const hasAt = atRegex.test(email);

  const emailStatus = {
    isValid: isValidEmail,
    validityDetails: {
      isValidUsername,
      isValidDomain,
      hasAt,
    },
  };

  return emailStatus;
};

export const checkPassword = (password) => {
  const isValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,16}$/.test(
      password
    );
  const isValidLength = password.length >= 8 && password.length <= 16;
  const hasUppercaseLetter = /[A-Z]/.test(password);
  const hasLowercaseLetter = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialCharacter = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(
    password
  );
  const hasNoSpaces = !/\s/.test(password);

  const passwordStatus = {
    isValid,
    validityDetails: {
      isValidLength,
      hasUppercaseLetter,
      hasLowercaseLetter,
      hasNumber,
      hasSpecialCharacter,
      hasNoSpaces,
    },
  };

  return passwordStatus;
};

export const checkFourDigits = (digits) => {
  return digits.every(
    (digit) => typeof digit === "number" && digit >= 0 && digit <= 9
  );
};

export const checkPasswordMatch = (password, confirmPassword) => {
  return password === confirmPassword;
}

export const adjustCloudinaryImgSize = (url, width) => {
  const delimiter = '/upload';
  const index = url.indexOf(delimiter) + delimiter.length;

  const endpoint = url.substring(0, index);
  const public_id = url.substring(index);
  const optimization = `/c_scale,w_${width}`;

  const newUrl = width === 0 ? `${endpoint}${public_id}` : `${endpoint}${optimization}${public_id}`;

  return newUrl;
}
