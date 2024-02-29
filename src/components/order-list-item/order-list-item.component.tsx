import { FC, useState } from "react";

// 3rd-party dependencies imports
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// component imports
import SnackBar from "../snackbar/snackbar.component";

// state management imports
import { selectUser } from "../../store/user/user.selector";

// props or interfaces imports
import OrderListItemProps, {
  ProductListProps,
  ProductItemProps,
} from "./order-list-item.interface";
import ProductInterface from "../../interfaces/product-interface";

// styling imports
import {
  DateSC,
  ContentSC,
  ListItemSC,
  MediaSC,
  IDSC,
  ProductItemSC,
  ProductNameSC,
  ProductPriceSC,
} from "./order-list-item.styles";

const getRatingText = (rating: number) => {
  let label = "";

  switch (rating) {
    case 1:
      label = "Poor";
      break;
    case 2:
      label = "Fair";
      break;
    case 3:
      label = "Average";
      break;
    case 4:
      label = "Good";
      break;
    case 5:
      label = "Excellent";
      break;
    default:
      label = "";
      break;
  }

  return `Your rating: ${rating} (${label})`;
};

const ProductList: FC<ProductListProps> = ({ productList }) => {
  return (
    <>
      {productList.map((productItem: ProductInterface) => {
        return (
          <ProductItem
            key={`productItem-${productItem._id}`}
            productItem={productItem}
          />
        );
      })}
    </>
  );
};

const ProductItem: FC<ProductItemProps> = ({ productItem }) => {
  return (
    <>
      <ProductItemSC>
        <MediaSC image={productItem.imgUrls[0]} />
        <ContentSC>
          <ProductNameSC>{productItem.name}</ProductNameSC>
          <ProductPriceSC>{`$${productItem.price}`}</ProductPriceSC>
        </ContentSC>
      </ProductItemSC>
    </>
  );
};

const OrderListItem: FC<OrderListItemProps> = ({ order }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const product = useSelector(selectProduct(review.productID));
  const user = useSelector(selectUser);
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
  }>({
    open: false,
    message: "",
    type: "info",
  });

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  return (
    <>
      <ListItemSC>
        <DateSC>{order.orderDate}</DateSC>
        <IDSC>{`Order ID: #${order.orderID}`}</IDSC>
        <ProductList productList={order.products} />
      </ListItemSC>
      <SnackBar
        type={snackbar.type}
        message={snackbar.message}
        onClose={snackbarCloseHandler}
        open={snackbar.open}
      />
    </>
  );
};

export default OrderListItem;
