import ProductInterface from "./product-interface";
import OrderInterface from "./order.interface";
import UserInterface from "./user.interface";
import ReviewInterface from "./review-interface";
import WishlistInterface from "./wishlist.interface";

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
  review: {
    reviews: ReviewInterface[];
  };
  wishlist: {
    wishlists: WishlistInterface[];
  };
  relatedProduct: {
    relatedProducts: ProductInterface[];
  };
}

export default StoreStateInterface;