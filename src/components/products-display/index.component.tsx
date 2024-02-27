import { FC, useEffect, useState } from "react";
import { Box, Grid } from "@mui/material";
import _ from "lodash";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";

import Sort from "../sort/sort.component";
import ProductCard from "../product-card/product-card.component";
import SlideShow from "../slideshow/index.component";
import ProductsDisplayProps from "./index.interface";
import ProductInterface from "../../interfaces/product-interface";
import {
  ProductsDisplaySC,
  ProductsDisplayTitleSC,
  ProductsDisplayEmptyTextSC,
  PaginationStackSC,
  SlideShowContainerSC,
  TitleContainerSC,
} from "./index.styles";
import slideShowSample from "../../sample/slideshow/slideshow-sample";
import { Pagination, Stack } from "@mui/material";
import { getSlideshow } from "../../apis/slideshows/slideshow.api";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";
import { SLIDESHOWIDS } from "../../utils/constants";
import { getProductsPerPage } from "../../utils/helpers";
import ProductCardSkeleton from "../product-card/product-card-skeleton.component";
import { COLORS, BREAKPOINTS, space } from "../../styles/styles";
import { selectUser } from "../../store/user/user.selector";
import { selectWishlists } from "../../store/wishlist/wishlist.selector";
import { getWishlistsByUserID } from "../../apis/wishlists/wishlists.api";
import WISHLIST_ACTION_TYPES from "../../store/wishlist/wishlist.types";

const theme = createTheme({
  palette: {
    primary: {
      main: `${COLORS.PRIMARY.P500}`,
    },
  },
});


const ProductsDisplay: FC<ProductsDisplayProps> = ({ title, products }) => {
  const token = Cookies.get('jwt');
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const wishlists = useSelector(selectWishlists);
  const [loading, setLoading] = useState(true);
  const [sortMenuItem, setSortMenuItem] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideshow, setSlideshow] = useState<SlideShowItemInterface[]>(
    [] as SlideShowItemInterface[]
  );
  const productsPerPage = 8;
  let totalPages = !_.isEmpty(products)
    ? Math.ceil(products.length / productsPerPage)
    : 0;
  const [displayedProducts, setDisplayedProducts] = useState<
    ProductInterface[]
  >([]);
  const skeletonProducts = [
    { _id: "product-skeleton-1" },
    { _id: "product-skeleton-2" },
    { _id: "product-skeleton-3" },
    { _id: "product-skeleton-4" },
    { _id: "product-skeleton-5" },
    { _id: "product-skeleton-6" },
    { _id: "product-skeleton-7" },
    { _id: "product-skeleton-8" },
  ];
  const isLargeScreen = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);

  useEffect(() => {
    if (!_.isEmpty(products) || products === null) {
      setLoading(false);
    }
  }, [products]);

  const handlePageChange = (event: any, value: number) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    const fetchSlideshow = async () => {
      const response = await getSlideshow(SLIDESHOWIDS.LANDING);

      if (!_.isEmpty(response.data)) {
        setSlideshow(response.data.items);
      }
    };

    fetchSlideshow();
  }, []);

  useEffect(() => {
    const fetchWishlists = async () => {
      try {
        const response = await getWishlistsByUserID(user?._id, token);

        const userWishlists = response.data ?? [];

        // update state
        dispatch({
          type: WISHLIST_ACTION_TYPES.ADD_WISHLISTS,
          payload: userWishlists,
        });
      } catch (error: any) {
        console.log(error);
      }
    };

    if (token && user?._id) {
      fetchWishlists();
    }
  }, [user?._id]);

  useEffect(() => {
    if (sortMenuItem === 0) {
      const slicedProducts = getProductsPerPage(
        currentPage,
        productsPerPage,
        products
      );
      setDisplayedProducts(slicedProducts);
    }

    if (sortMenuItem === 1) {
      const sortedProducts = [...products].sort((a, b) => a.price - b.price);
      const slicedProducts = getProductsPerPage(
        currentPage,
        productsPerPage,
        sortedProducts
      );
      setDisplayedProducts(slicedProducts);
    }

    if (sortMenuItem === 2) {
      const sortedProducts = [...products].sort((a, b) => b.price - a.price);
      const slicedProducts = getProductsPerPage(
        currentPage,
        productsPerPage,
        sortedProducts
      );
      setDisplayedProducts(slicedProducts);
    }
  }, [sortMenuItem, products, currentPage]);

  return (
    <ProductsDisplaySC>
      <SlideShowContainerSC>
        <SlideShow
          indicatorType="dot"
          data={!_.isEmpty(slideshow) ? slideshow : []}
          autoSlide
          redirectOnClick
          aspectRatio={isLargeScreen ? "21:9" : "16:9"}
        />
      </SlideShowContainerSC>
      <TitleContainerSC>
        {!_.isEmpty(title) && (
          <ProductsDisplayTitleSC variant="h5">{title}</ProductsDisplayTitleSC>
        )}
        <Sort sortMenuItem={sortMenuItem} setSortMenuItem={setSortMenuItem} />
      </TitleContainerSC>
      {
        <ThemeProvider theme={theme}>
          <Grid
            container
            spacing={3}
            sx={{
              paddingLeft: `${space.l}`,
              paddingRight: `${space.l}`,
              marginBottom: "40px",
            }}
          >
            {!_.isEmpty(products) &&
              displayedProducts.map(
                (product: ProductInterface, index: number) => {
                  return (
                    <Grid
                      item
                      xs={6}
                      lg={4}
                      xl={3}
                      key={`product-${product._id}`}
                    >
                      <ProductCard {...product} />
                    </Grid>
                  );
                }
              )}
            {/* GENERATE SKELETONS */}
            {_.isEmpty(products) &&
              loading &&
              skeletonProducts.map((product, index: number) => {
                return (
                  <Grid
                    item
                    xs={6}
                    lg={4}
                    xl={3}
                    key={`product-${product._id}`}
                  >
                    <ProductCardSkeleton />
                  </Grid>
                );
              })}
          </Grid>
          {!_.isEmpty(products) && totalPages > 1 && (
            <PaginationStackSC>
              <Pagination
                count={totalPages}
                color="primary"
                page={currentPage}
                onChange={handlePageChange}
              />
            </PaginationStackSC>
          )}
        </ThemeProvider>
      }

      {_.isEmpty(products) && !loading && (
        <ProductsDisplayEmptyTextSC variant="body1">
          No products...
        </ProductsDisplayEmptyTextSC>
      )}
    </ProductsDisplaySC>
  );
};

export default ProductsDisplay;
