import { FC, useContext, useEffect } from "react";

import Header from "../../components/header/index.component";
import ProductsDisplay from "../../components/products-display/index.component";
import Footer from "../../components/footer/index.component";
import generateProductsSample from "../../sample/products/product-sample";
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { getProducts } from "../../apis/products/products";
import ProductsContext from "../../contexts/product-context";
import { LandingPageSC } from "./index.styles";

const LandingPage: FC = () => {
  const { products, setProducts } = useContext(ProductsContext);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProducts();

      const responseData = response.data;

      const convertedResponse = responseData.map((obj: any) => {
        const price = parseFloat(obj.price);
        return { ...obj, price };
      });

      setProducts(convertedResponse);
    };

    fetchProducts();
  }, []);

  return (
    <LandingPageSC>
      <Header />
      <ProductsDisplay title="Trending Products" products={products} />
      <Footer footerItems={footerItemsSample} />
    </LandingPageSC>
  );
};

export default LandingPage;
