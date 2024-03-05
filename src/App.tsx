import React, { FC, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, ScrollRestoration, useLocation } from "react-router-dom";

import LandingPage from "./pages/landing/landing.component";
import ProductDetailsPage from "./pages/product-details/index.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import ResetPasswordRequestPage from "./pages/reset-password-request/reset-password-request.page";
import ResetPasswordVerifyPage from "./pages/reset-password-verify/reset-password-verify.page";
import UpdatePasswordPage from "./pages/update-password/update-password.page";
import { ROUTES } from "./utils/constants";
import GlobalStyle from "./styles/globalstyles";
import PrivateConfirmationRoute from "./pages/confirmation/confirmation.private";
import PrivateWishlistRoute from "./pages/wishlist/wishlist.private";
import PrivateReviewRoute from "./pages/review/review.private";
import PrivateOrderHistoryRoute from "./pages/order/order.private";
import PrivateProfileRoute from "./pages/profile/profile.private";

const ConfirmationPage = React.lazy(() => import("./pages/confirmation/confirmation.component"));
const ProfilePage = React.lazy(() => import("./pages/profile/profile.page"));
const WishlistPage = React.lazy(() => import("./pages/wishlist/wishlist.page"));
const OrderHistoryPage = React.lazy(() => import("./pages/order/order.page"));
const ReviewPage = React.lazy(() => import("./pages/review/review.page"));
const NotFoundPage = React.lazy(
  () => import("./pages/notfound/notfound.component")
);

const App: FC = () => {
  const ScrollToTopOnNavigation = () => {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

  return (
    <div className="App">
      <GlobalStyle />
          <Router>
            <ScrollToTopOnNavigation />
            <Routes>
              <Route path={ROUTES.LANDING} element={<LandingPage />} />
              <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
              <Route path={ROUTES.SIGN_UP} element={<SignUpPage />} />
              <Route path={ROUTES.SIGN_IN} element={<SignInPage />} />
              <Route path={ROUTES.RESET_PASSWORD_REQUEST} element={<ResetPasswordRequestPage />} />
              <Route path={ROUTES.RESET_PASSWORD_VERIFY} element={<ResetPasswordVerifyPage />} />
              <Route path={ROUTES.RESET_PASSWORD_UPDATE} element={<UpdatePasswordPage />} />
              <Route path={ROUTES.CONFIRMATION} element={<PrivateConfirmationRoute />}>
                <Route
                  path={ROUTES.CONFIRMATION}
                  element={
                    <Suspense fallback={'loading...'}>
                      <ConfirmationPage />
                    </Suspense>
                  }
                />
              </Route>
              <Route path={ROUTES.PROFILE} element={<PrivateProfileRoute />}>
                <Route
                  path={ROUTES.PROFILE}
                  element={
                    <Suspense fallback={'loading...'}>
                      <ProfilePage />
                    </Suspense>
                  }
                />
              </Route>
              <Route path={ROUTES.REVIEWS} element={<PrivateReviewRoute />}>
                <Route
                  path={ROUTES.REVIEWS}
                  element={
                    <Suspense fallback={'loading...'}>
                      <ReviewPage />
                    </Suspense>
                  }
                />
              </Route>
              <Route path={ROUTES.ORDER_HISTORY} element={<PrivateOrderHistoryRoute />}>
                <Route
                  path={ROUTES.ORDER_HISTORY}
                  element={
                    <Suspense fallback={'loading...'}>
                      <OrderHistoryPage />
                    </Suspense>
                  }
                />
              </Route>
              <Route path={ROUTES.WISHLIST} element={<PrivateWishlistRoute />}>
                <Route
                  path={ROUTES.WISHLIST}
                  element={
                    <Suspense fallback={'loading...'}>
                      <WishlistPage />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path={ROUTES.NOTFOUND}
                element={
                  <Suspense>
                    <NotFoundPage />
                  </Suspense>
                }
              />
            </Routes>
          </Router>
    </div>
  );
};

export default App;
