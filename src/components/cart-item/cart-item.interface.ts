import ProductInterface from "../../interfaces/product-interface";

export default interface CartItemProps {
  onCloseCart: () => void;
  item: ProductInterface;
}