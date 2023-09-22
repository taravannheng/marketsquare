interface WishlistInterface {
  _id: string;
  userID: string;
  productID: string;
  createdAt: string;
  updatedAt: string;
  isInWishlist: boolean;
}

export default WishlistInterface;