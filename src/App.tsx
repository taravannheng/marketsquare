import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/index.component";
import ProductDetailsPage from "./pages/product-details/index.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import ResetPasswordRequestPage from "./pages/reset-password-request/reset-password-request.page";
import ResetPasswordVerifyPage from "./pages/reset-password-verify/reset-password-verify.page";
import UpdatePasswordPage from "./pages/update-password/update-password.page";
import { ROUTES } from "./utils/constants";
import GlobalStyle from "./styles/globalstyles";
import PrivateConfirmationRoute from "./pages/confirmation/index.private";

const ConfirmationPage = React.lazy(() => import("./pages/confirmation/index.component"));
const NotFoundPage = React.lazy(
  () => import("./pages/notfound/notfound.component")
);

const App: FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
          <Router>
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
