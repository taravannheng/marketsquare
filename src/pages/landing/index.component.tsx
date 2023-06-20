import { FC, useEffect, useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";

import Header from "../../components/header/index.component";
import ProductsDisplay from "../../components/products-display/index.component";
import Footer from "../../components/footer/index.component";
import generateProductsSample from "../../sample/products/product-sample";
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { getProducts } from "../../apis/products/products.api";
import { LandingPageSC } from "./index.styles";
import LoadingScreen from "../../components/loading-screen/index.component";
import { selectProducts } from "../../store/product/product.selector";

const LandingPage: FC = () => {
  const [loading, setLoading] = useState(true);
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
    if (!_.isEmpty(products) || products === null) {
      setLoading(false);
    }
  }, [products]);

  return (
    <LandingPageSC>
      {loading && <LoadingScreen />}
      {!loading && (
        <>
          <Header />
          <ProductsDisplay title="Trending Products" products={products} />
          <Footer footerItems={footerItemsSample} />
        </>
      )}
    </LandingPageSC>
  );
};

export default LandingPage;
