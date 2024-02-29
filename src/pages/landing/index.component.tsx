import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 3rd-party dependencies imports
import _ from "lodash";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";

// component imports
import Header from "../../components/header/index.component";
import ProductsDisplay from "../../components/products-display/index.component";
import Footer from "../../components/footer/index.component";
import SnackBar from "../../components/snackbar/snackbar.component";

// state management imports
import { selectProducts } from "../../store/product/product.selector";
import { selectUser } from "../../store/user/user.selector";

// api imports
import { getProducts } from "../../apis/products/products.api";
import { getUser } from "../../apis/users/users.api";

// styling imports
import { LandingPageSC } from "./index.styles";

// constants or helper function imports
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { ROUTES } from "../../utils/constants";

const LandingPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isSignedIn = params.get("signedIn");
  const jwtToken = params.get("token");
  const isSignedOut = params.get("signedOut");
  const user = useSelector(selectUser);

  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
  }>({
    open: false,
    message: "",
    type: "info",
  });
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();

      const responseData = response.data;

      if (!_.isEmpty(responseData)) {
        const convertedResponse = responseData.map((obj: any) => {
          const price = parseFloat(obj.price);
          return { ...obj, price };
        });

        dispatch({ type: "SET_PRODUCTS", payload: convertedResponse });
      }

      if (_.isEmpty(responseData)) {
        dispatch({ type: "SET_PRODUCTS", payload: null });
      }
    };

    if (_.isEmpty(products)) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      const token = Cookies.get("jwt");
      const response = await getUser(token);

      // set user state
      dispatch({ type: "SET_USER", payload: { ...response.data } });

      setSnackbar({
        open: true,
        message: "You have successfully signed in!",
        type: "success",
      });

      // navigate to home page to reset the url to prevent the snackbar from appearing again
      navigate(`${ROUTES.LANDING}`);
    };

    // for local strategy
    if (isSignedIn && user) {
      setSnackbar({
        open: true,
        message: "You have successfully signed in!",
        type: "success",
      });

      // navigate to home page to reset the url to prevent the snackbar from appearing again
      navigate(`${ROUTES.LANDING}`);
    }

    // for oauth strategy
    if (isSignedIn && _.isEmpty(user)) {
      // set cookie to expire in 1hr
      if (!_.isEmpty(jwtToken)) {
        Cookies.set("jwt", jwtToken!, { expires: 1 / 24 });
      }

      fetchUser();
    }

    if (isSignedOut && _.isEmpty(user)) {
      setSnackbar({
        open: true,
        message: "You have successfully signed out!",
        type: "success",
      });

      // navigate to home page to reset the url to prevent the snackbar from appearing again
      navigate(`${ROUTES.LANDING}`);
    }
  }, [isSignedIn, isSignedOut]);

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  return (
    <LandingPageSC>
      <>
        <Header />
        <ProductsDisplay title="Trending Products" products={products} />
        <Footer footerItems={footerItemsSample} />
        <SnackBar
          type={snackbar.type}
          message={snackbar.message}
          onClose={snackbarCloseHandler}
          open={snackbar.open}
        />
      </>
    </LandingPageSC>
  );
};

export default LandingPage;
