import _ from "lodash";

import { getRelatedProducts } from "../../apis/products/related-products.api";
import {
  getMultipleProducts,
  getProduct,
} from "../../apis/products/products.api";
import { getReviewsByProductID } from "../../apis/reviews/reviews.api";
import ProductInterface from "../../interfaces/product-interface";
import ReviewInterface from "../../interfaces/review-interface";

const fetchProduct = async (productID: string) => {
  try {
    const response = await getProduct(productID);

    return response?.data[0] ?? null;
  } catch (e) {
    console.error(e);
  }
};

const fetchRelatedProductIDs = async (productID: string) => {
  const response = await getRelatedProducts(productID);

  const relatedProductIDs = response?.data[0]?.products;

  return relatedProductIDs ?? null;
};

const fetchMultipleProducts = async (
  productIDs: string[],
  productID: string
) => {
  const response = await getMultipleProducts(productIDs);

  const responseData = response.data;

  const convertedResponse = responseData.map((obj: any) => {
    const price = parseFloat(obj.price);
    return { ...obj, price };
  });

  //  remove if related product has the same id
  const relatedProducts = convertedResponse.filter(
    (item: ProductInterface) => item._id !== productID
  );

  return relatedProducts ?? null;
};

const fetchReviews = async (productID: string) => {
  const response = await getReviewsByProductID(productID);

  const reviews = response?.data;

  return reviews ?? null;
};

const fetchData = async (
  productID: string,
  products: ProductInterface[] | null,
  relatedProducts: ProductInterface[] | null,
  reviews: ReviewInterface[] | null,
) => {
  let productData: ProductInterface | null = {} as ProductInterface;
  let relatedProductsData: ProductInterface[] | null = [] as ProductInterface[];
  let reviewsData: ReviewInterface[] | null = [] as ReviewInterface[];

  // get product data
  if (_.isEmpty(products)) {
    productData = await fetchProduct(productID);
  }

  if (!_.isEmpty(products)) {
    const product = products!.find(
      (item: ProductInterface) => item._id === productID
    );

    if (product) {
      productData = product;
    }

    if (!product) {
      productData = await fetchProduct(productID);
    }
  }

  // get related products data
  if (_.isEmpty(relatedProducts)) {
      const relatedProductIDs = await fetchRelatedProductIDs(productID);

      if (!_.isEmpty(relatedProductIDs)) {
        relatedProductsData = await fetchMultipleProducts(
          relatedProductIDs,
          productID
        );
      }
  }

  if (!_.isEmpty(relatedProducts)) {
    // @ts-ignore
    const result = relatedProducts[`${productID}`];

    if (result) {
      relatedProductsData = result;
    }

    if (!result) {
      const relatedProductIDs = await fetchRelatedProductIDs(productID);

      if (!_.isEmpty(relatedProductIDs)) {
        relatedProductsData = await fetchMultipleProducts(
          relatedProductIDs,
          productID
        );
      }
    }
  }

  // get reviews data
  if (_.isEmpty(reviews)) {
    reviewsData = await fetchReviews(productID);
  }

  if (!_.isEmpty(reviews)) {
    // @ts-ignore
    const result = reviews[`${productID}`];

    if (result) {
      reviewsData = result;
    }

    if (!result) {
      reviewsData = await fetchReviews(productID);
    }
  }

  return { productData, relatedProductsData, reviewsData };
};

export default fetchData;
