import ProductInterface from "./product-interface";

interface StoreStateInterface {
  product: {
    products: ProductInterface[];
  };
  cart: {
    cart: ProductInterface[];
  };
}

export default StoreStateInterface;