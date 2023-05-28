import ProductInterface from "./product-interface";

export default interface OrderInterface {
  orderID: string;
  cartID: string;
  customer: {
    email: string;
    name: string;
  };
  payment: {
    amount: number;
    cardBrand: string;
    cardLast4: string;
    currency: string;
  };
  products: ProductInterface[];
  shipping: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string | null;
      postalCode: string;
      state: string;
    }
  }
}