import { FC, useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/index.component";
import ProductDetailsDisplay from "../../components/product-details-display/index.component";
import Divider from "../../components/divider/index.component";
import ReviewDisplay from "../../components/review-display/index.component";
import RelatedProductDisplay from "../../components/related-product-display/index.component";
import ProductsContext from "../../contexts/product-context";
import Footer from "../../components/footer/index.component";
import footerUtilityLinksSample from "../../sample/footer/utility-links-sample";
import {
  BottomContentContainerSC,
  DividerContainerSC,
  ProductDetailsPageSC,
  ReviewDisplayContainerSC,
} from "./index.style";
import ProductInterface from "../../interfaces/product-interface";
import _ from "lodash";
import { getRelatedProducts } from "../../apis/products/related-products";
import RelatedProductInterface from "../../interfaces/related-product-interface";
import { getProducts, getMultipleProducts } from "../../apis/products/products";
import { RelatedProductDisplaySC } from "../../components/related-product-display/index.styles";

const ProductDetailsPage: FC = () => {
  const { productID } = useParams();
  const { products, setProducts } = useContext(ProductsContext);
  const [product, setProduct] = useState<ProductInterface>(
    {} as ProductInterface
  );
  const [relatedProducts, setRelatedProducts] = useState<ProductInterface[]>(
    [] as ProductInterface[]
  );

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (!_.isEmpty(products)) {
      products.map((product: ProductInterface) => {
        if (productID === product._id) {
          setProduct(product);
        }
      });
    }

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
          const relatedProductsData = convertedResponse.filter((item: any) => item._id === product._id)
          
          setRelatedProducts(relatedProductsData);
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
      <Footer footerItems={footerUtilityLinksSample} />
    </ProductDetailsPageSC>
  );
};

export default ProductDetailsPage;
