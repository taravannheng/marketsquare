import ProductInterface from "../../interfaces/product-interface";

export default interface CartItemProps {
  closeCartHandler: () => void;
  item: ProductInterface;
}