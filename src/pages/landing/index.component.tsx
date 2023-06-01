import { FC, useContext, useEffect, useState } from "react";
import _ from "lodash";

import Header from "../../components/header/index.component";
import ProductsDisplay from "../../components/products-display/index.component";
import Footer from "../../components/footer/index.component";
import generateProductsSample from "../../sample/products/product-sample";
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { getProducts } from "../../apis/products/products";
import ProductsContext from "../../contexts/product-context";
import { LandingPageSC } from "./index.styles";
import LoadingScreen from "../../components/loading-screen/index.component";

const LandingPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();

      const responseData = response.data;

      if (!_.isEmpty(responseData)) {
        const convertedResponse = responseData.map((obj: any) => {
          const price = parseFloat(obj.price);
          return { ...obj, price };
        });

        setProducts(convertedResponse);
      }

      if (_.isEmpty(responseData)) {
        setProducts(null);
      }
    };

    fetchProducts();
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
