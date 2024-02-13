import OrderListItemInterface from "../../interfaces/order-list-item.interface";
import ProductInterface from "../../interfaces/product-interface";

export default interface OrderListItemProps {
  order: OrderListItemInterface;  
}

export interface ProductListProps {
  productList: ProductInterface[];
}

export interface ProductItemProps {
  productItem: ProductInterface;
}