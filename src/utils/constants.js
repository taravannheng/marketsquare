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