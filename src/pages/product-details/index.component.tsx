import { FC, useEffect, useReducer } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import { ArrowBackIosRounded } from "@mui/icons-material";

import Header from "../../components/header/index.component";
import ProductDetailsDisplay from "../../components/product-details-display/index.component";
import Divider from "../../components/divider/divider.component";
import ReviewDisplay from "../../components/review-display/index.component";
import RelatedProductDisplay from "../../components/related-product-display/index.component";
import Footer from "../../components/footer/index.component";
import Button from "../../components/button/button.component";
import ProgressIndicator from "../../components/progress-indicator/index.component";
import footerUtilityLinksSample from "../../sample/footer/utility-links-sample";
import { ROUTES } from "../../utils/constants";
import {
  BackNavSC,
  BottomContentContainerSC,
  DividerContainerSC,
  EmptyBodySC,
  EmptyContentSC,
  ProductDetailsPageSC,
  ReviewDisplayContainerSC,
} from "./index.style";
import { RelatedProductDisplaySC } from "../../components/related-product-display/index.styles";
import { selectProducts } from "../../store/product/product.selector";
import { selectReviews } from "../../store/review/review.selector";
import { selectRelatedProducts } from "../../store/related-product/related-product.selector";
import REVIEW_ACTION_TYPES from "../../store/review/review.types";
import RELATED_PRODUCTS_ACTION_TYPES from "../../store/related-product/related-product.types";
import fetchData from "./product-details.controller";
import { initialState, productReducer } from "./product-details.reducer";

const ProductDetailsPage: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productID } = useParams();
  const [state, productDispatch] = useReducer(productReducer, initialState);
  const { product, currentProductReviews, currentRelatedProducts } = state;
  const products = useSelector(selectProducts);
  const reviews = useSelector(selectReviews);
  const relatedProducts = useSelector(selectRelatedProducts);

  const redirectToHomepage = () => {
    navigate(ROUTES.LANDING);
  };

  useEffect(() => {
    const getData = async () => {
      if (productID) {
        const { productData, relatedProductsData, reviewsData } =
          await fetchData(
            productID,
            products,
            relatedProducts,
            reviews,
            product,
            currentRelatedProducts,
            currentProductReviews
          );

        // dispatch to product reducer
        productDispatch({ type: "SET_PRODUCT", payload: productData });
        productDispatch({
          type: "SET_RELATED_PRODUCTS",
          payload: relatedProductsData,
        });
        productDispatch({ type: "SET_REVIEWS", payload: reviewsData });

        // update related products state
        const relatedProductsPayload = {
          [`${productID}`]: relatedProductsData,
        };

        dispatch({
          type: RELATED_PRODUCTS_ACTION_TYPES.ADD_RELATED_PRODUCTS,
          payload: relatedProductsPayload,
        });

        // update review state
        const reviewsPayload = {
          [`${productID}`]: reviewsData,
        };

        dispatch({
          type: REVIEW_ACTION_TYPES.ADD_REVIEWS,
          payload: reviewsPayload,
        });
      }
    };

    getData();
  }, [productID]);

  return (
    <ProductDetailsPageSC>
      <Header />
      {!_.isEmpty(product) && (
        <>
          <ProductDetailsDisplay product={product} />
          <DividerContainerSC>
            <Divider />
          </DividerContainerSC>
          <BottomContentContainerSC>
            <ReviewDisplayContainerSC>
              <ReviewDisplay reviews={currentProductReviews} />
            </ReviewDisplayContainerSC>
            <RelatedProductDisplaySC>
              <RelatedProductDisplay products={currentRelatedProducts} />
            </RelatedProductDisplaySC>
          </BottomContentContainerSC>
        </>
      )}
      {_.isEmpty(product) && (
        <EmptyContentSC>
          <BackNavSC>
            <Button
              styleType="tertiary"
              icon={<ArrowBackIosRounded />}
              clickHandler={redirectToHomepage}
            >
              Back
            </Button>
          </BackNavSC>
          <EmptyBodySC>
            <ProgressIndicator />
          </EmptyBodySC>
        </EmptyContentSC>
      )}
      <Footer footerItems={footerUtilityLinksSample} />
    </ProductDetailsPageSC>
  );
};

export default ProductDetailsPage;
