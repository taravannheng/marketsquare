import ProductInterface from "./product-interface";
import OrderInterface from "./order.interface";
import UserInterface from "./user.interface";

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
  user: {
    user: UserInterface;
  };
}

export default StoreStateInterface;