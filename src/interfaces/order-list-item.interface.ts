import ProductInterface from "./product-interface";

export default interface OrderListItemInterface {
  _id: string;
  orderID: string;
  orderDate: string;
  products: ProductInterface[];
}