import { FC, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";

import Header from "../../components/header/index.component";
import ProductsDisplay from "../../components/products-display/index.component";
import Footer from "../../components/footer/index.component";
import generateProductsSample from "../../sample/products/product-sample";
import footerItemsSample from "../../sample/footer/utility-links-sample";
import { getMultipleProducts, getProducts } from "../../apis/products/products";
import ProductsContext from "../../contexts/product-context";
import CartContext from "../../contexts/cart-context";
import { LandingPageSC } from "./index.styles";
import LoadingScreen from "../../components/loading-screen/index.component";
import { getCart } from "../../apis/carts/cart.api";

const LandingPage: FC = () => {
  const [loading, setLoading] = useState(true);
  const { products, setProducts } = useContext(ProductsContext);
  const { setCart } = useContext(CartContext);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const orderCanceled = params.get("canceled");
  const cartID = params.get("cartID");

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

    const fetchCart = async (cartID: string) => {
      const cartResponse = await getCart(cartID);
      const cartData = cartResponse.data[0];

      if (!_.isEmpty(cartData)) {
        const productIDs: string[] = [];
        cartData.products.map((product: any) => {
          productIDs.push(product._id);
        });

        // get products
        const productResponse = await getMultipleProducts(productIDs);
        const responseData = productResponse.data;

        // convert price to float
        const convertedResponse = responseData.map((obj: any) => {
          const price = parseFloat(obj.price);
          return { ...obj, price };
        });
        
        // modify quantity
        const cart = convertedResponse.map((product: any) => {
          const matchedProduct = cartData.products.find((productInCart: any) => productInCart._id === product._id);
          
          if (matchedProduct) {
            return { ...product, quantity: matchedProduct.quantity };
          }
          
          return product;
        });

        setCart(cart);
      }
    };

    
    fetchProducts();
    orderCanceled && cartID && fetchCart(cartID);
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
