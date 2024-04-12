import ReviewsIcon from '@mui/icons-material/Reviews';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';

// asset imports
import FacebookLogo from "../assets/socials/social-facebook.png";
import InstagramLogo from "../assets/socials/social-instagram.png";
import LinkedinLogo from "../assets/socials/social-linkedin.png";
import TwitterLogo from "../assets/socials/social-twitter.png";
import YoutubeLogo from "../assets/socials/social-youtube.png";

export const LOGO_URLS = {
  TRANSPARENT: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691492423/marketsquare/logos/logo-transparent_qf50bm.svg',
  TRANSPARENT_WHITE: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691493044/marketsquare/logos/logo-transparent-white_hdvpdf.svg',
  ANIMATION: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691493166/marketsquare/logos/logo-animation_kkp6eh.svg',
  FILLED: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691493465/marketsquare/logos/logo-filled_aoarbj.svg',
  HORIZONTAL: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691493534/marketsquare/logos/logo-horizontal_t1xbym.png',
  VERTICAL_WHITE: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691493612/marketsquare/logos/logo-vertical-white_dloicp.svg',
  VERTICAL: 'https://res.cloudinary.com/dzcwvn0sk/image/upload/q_auto:eco/v1691493697/marketsquare/logos/logo-vertical_jej7yy.svg'
}

export const ROUTES = {
  LANDING: '/',
  PRODUCT_DETAILS: '/product/:productID',
  CONFIRMATION: '/confirmation',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  PROFILE: '/profile',
  WISHLIST: '/wishlist',
  ORDER_HISTORY: '/orders',
  REVIEWS: '/reviews',
  AUTH_GOOGLE: `${process.env.REACT_APP_BASE_URL}/api/auth/google`,
  // AUTH_FACEBOOK: `${process.env.REACT_APP_BASE_URL}/api/auth/facebook/callback`,
  RESET_PASSWORD_REQUEST: '/reset-password/request',
  RESET_PASSWORD_VERIFY: '/reset-password/verify',
  RESET_PASSWORD_UPDATE: '/reset-password/update',
  NOTFOUND: '/*',
}

export const SLIDESHOWIDS = {
  LANDING: '6475c460985c7ddad3a16a31',
}

export const SOCIAL_LOGOS = [
  {
    id: "sl_fb",
    href: "/",
    image: FacebookLogo,
    title: "social facebook logo",
  },
  {
    id: "sl_ig",
    href: "/",
    image: InstagramLogo,
    title: "social instagram logo",
  },
  {
    id: "sl_li",
    href: "/",
    image: LinkedinLogo,
    title: "social linkedin logo",
  },
  {
    id: "sl_twt",
    href: "/",
    image: TwitterLogo,
    title: "social twitter logo",
  },
  {
    id: "sl_yt",
    href: "/",
    image: YoutubeLogo,
    title: "social youtube logo",
  },
];

export const HEADER_LIST_ITEMS = [
  {
    id: 'list-item-profile',
    text: 'Profile',
    icon: <AccountCircleIcon />,
    href: `${ROUTES.PROFILE}`,
  },
  {
    id: 'list-item-wishlist',
    text: 'Wishlist',
    icon: <FavoriteIcon />,
    href: `${ROUTES.WISHLIST}`,
  },
  {
    id: 'list-item-order-history',
    text: 'Order History',
    icon: <ShoppingBagIcon />,
    href: `${ROUTES.ORDER_HISTORY}`,
  },
  {
    id: 'list-item-reviews',
    text: 'Reviews',
    icon: <ReviewsIcon />,
    href: `${ROUTES.REVIEWS}`,
  },
];

export const ALERT_MESSAGES = {
  incorrectCredential: {
    type: "error",
    message: "Email or password is incorrect. Please try again!",
  },
  internalServerError: {
    type: "error",
    message: "Internal Server Error! Please try again later.",
  },
  newUser: {
    type: "success",
    message: "You have successfully created an account! Please sign in.",
  },
  wishlistSignIn: {
    type: "info",
    message: "Please sign in to view your wishlist!",
  },
  reviewsSignIn: {
    type: "info",
    message: "Please sign in to view your reviews!",
  },
  orderHistorySignIn: {
    type: "info",
    message: "Please sign in to view your order history!",
  },
  updatedPassword: {
    type: "success",
    message: "You have successfully updated your password! Please sign in.",
  },
};

export const SNACKBAR_MESSAGES = {
  signedIn: {
    open: true,
    message: "You have successfully signed in!",
    type: "success",
  },
  signedOut: {
    open: true,
    message: "You have successfully signed out!",
    type: "success",
  },
};

