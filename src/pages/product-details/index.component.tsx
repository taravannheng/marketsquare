import { FC, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Header from "../../components/header/index.component";
import ProductDetailsDisplay from "../../components/product-details-display/index.component";
import Divider from "../../components/divider/index.component";
import ReviewDisplay from "../../components/review-display/index.component";
import RelatedProductDisplay from "../../components/related-product-display/index.component";
import Footer from "../../components/footer/index.component";
import footerUtilityLinksSample from "../../sample/footer/utility-links-sample";
import {
  BackNavSC,
  BottomContentContainerSC,
  DividerContainerSC,
  EmptyBodySC,
  EmptyContentSC,
  EmptyTextSC,
  ProductDetailsPageSC,
  ReviewDisplayContainerSC,
} from "./index.style";
import ProductInterface from "../../interfaces/product-interface";
import _ from "lodash";
import { getRelatedProducts } from "../../apis/products/related-products.api";
import RelatedProductInterface from "../../interfaces/related-product-interface";
import {
  getProducts,
  getMultipleProducts,
  getProduct,
} from "../../apis/products/products.api";
import { RelatedProductDisplaySC } from "../../components/related-product-display/index.styles";
import Button from "../../components/button/index.component";
import { ArrowBackIosRounded } from "@mui/icons-material";
import { ROUTES } from "../../utils/constants";

const ProductDetailsPage: FC = () => {
  const navigate = useNavigate();
  const { productID } = useParams();
  const [product, setProduct] = useState<ProductInterface>(
    {} as ProductInterface
  );
  const [relatedProducts, setRelatedProducts] = useState<ProductInterface[]>(
    [] as ProductInterface[]
  );

  const redirectToHomepage = () => {
    navigate(ROUTES.LANDING);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // get product data
    const fetchProduct = async () => {
      const response = await getProduct(productID);

      return response?.data[0] ?? null;
    };

    fetchProduct()
      .then((result) => {
        setProduct(result);
      })
      .catch((error) => console.error(error));

    // get related products
    const fetchRelatedProductIDs = async () => {
      const response = await getRelatedProducts(productID);

      const relatedProductIDs = response?.data[0]?.products ?? null;

      return relatedProductIDs;
    };

    fetchRelatedProductIDs()
      .then((result) => {
        const fetchMultipleProducts = async () => {
          const response = await getMultipleProducts(result);

          const responseData = response.data;

          const convertedResponse = responseData.map((obj: any) => {
            const price = parseFloat(obj.price);
            return { ...obj, price };
          });

          //  remove if related product has the same id
          const relatedProducts = convertedResponse.map((item: ProductInterface) => {
            if (item._id !== productID) {
              return item;
            }
          });
          
          setRelatedProducts(relatedProducts);
        };

        if (!_.isEmpty(result)) {
          fetchMultipleProducts();
        }
      })
      .catch((error) => console.error(error));
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
              <ReviewDisplay reviews={product.reviews} />
            </ReviewDisplayContainerSC>
            <RelatedProductDisplaySC>
              <RelatedProductDisplay products={relatedProducts} />
            </RelatedProductDisplaySC>
          </BottomContentContainerSC>
        </>
      )}
      {_.isEmpty(product) && (
        <EmptyContentSC>
          <BackNavSC>
            <Button
              width="102px"
              height="40px"
              type="icon"
              icon={<ArrowBackIosRounded />}
              label="Back"
              clickHandler={redirectToHomepage}
            />
          </BackNavSC>
          <EmptyBodySC>
            <EmptyTextSC variant="">No data...</EmptyTextSC>
          </EmptyBodySC>
        </EmptyContentSC>
      )}
      <Footer footerItems={footerUtilityLinksSample} />
    </ProductDetailsPageSC>
  );
};

export default ProductDetailsPage;
