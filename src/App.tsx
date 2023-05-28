import React, { FC, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/landing/index.component";
import ProductDetailsPage from "./pages/product-details/index.component";
import { ROUTES } from "./utils/constants";
import GlobalStyle from "./styles/globalstyles";
import { CartContextProvider } from "./contexts/cart-context";
import { ProductsContextProvider } from "./contexts/product-context";
import PrivateConfirmationRoute from "./pages/confirmation/index.private";

const ConfirmationPage = React.lazy(() => import("./pages/confirmation/index.component"));

const App: FC = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <CartContextProvider>
        <ProductsContextProvider>
          <Router>
            <Routes>
              <Route path={ROUTES.LANDING} element={<LandingPage />} />
              <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductDetailsPage />} />
              <Route path={ROUTES.CONFIRMATION} element={<ConfirmationPage />} />
            </Routes>
          </Router>
        </ProductsContextProvider>
      </CartContextProvider>
    </div>
  );
};

export default App;
