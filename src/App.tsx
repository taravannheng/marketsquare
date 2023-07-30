import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/index.component";
import ProductDetailsPage from "./pages/product-details/index.component";
import SignInPage from "./pages/signin/signin.component";
import SignUpPage from "./pages/signup/signup.component";
import { ROUTES } from "./utils/constants";
import GlobalStyle from "./styles/globalstyles";
import PrivateConfirmationRoute from "./pages/confirmation/index.private";

const ConfirmationPage = React.lazy(() => import("./pages/confirmation/index.component"));

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
            </Routes>
          </Router>
    </div>
  );
};

export default App;
