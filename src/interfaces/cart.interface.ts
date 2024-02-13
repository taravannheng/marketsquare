export default interface CartInterface {
  _id: string;
  cartID: string;
  stripeSessionID: string;
  products: ProductInterface[];
  createdAt: string;
  isDeleted: boolean;
  deletedAt: string | null;
}

interface ProductInterface {
  _id: string;
  quantity: number;
  stripeID: string;
}