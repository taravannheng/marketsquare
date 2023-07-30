export const ROUTES = {
  LANDING: '/',
  PRODUCT_DETAILS: '/product/:productID',
  CONFIRMATION: '/confirmation',
  SIGN_IN: '/sign-in',
  SIGN_UP: '/sign-up',
  AUTH_GOOGLE: `${process.env.REACT_APP_BASE_URL}/api/auth/google`,
  AUTH_FACEBOOK: `${process.env.REACT_APP_BASE_URL}/api/auth/facebook/callback`,
  RESET_PASSWORD: '/reset-password',
}

export const SLIDESHOWIDS = {
  LANDING: '6475c460985c7ddad3a16a31',
}