import ProductInterface from "./product-interface";
import OrderInterface from "./order.interface";

interface StoreStateInterface {
  product: {
    products: ProductInterface[];
  };
  cart: {
    cart: ProductInterface[];
  };
  order: {
    order: OrderInterface;
  };
}

export default StoreStateInterface;