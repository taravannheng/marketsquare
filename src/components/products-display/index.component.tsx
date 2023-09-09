import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Sort from "../sort/sort.component";
import ProductCard from "../product-card/product-card.component";
import Search from "../search/search.component";
import SlideShow from "../slideshow/index.component";
import ProductCategory from "../product-category/index.component";
import ProgressIndicator from "../progress-indicator/index.component";
import ProductsDisplayInterface from "./index.interface";
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
import { COLORS, BREAKPOINTS } from '../../styles/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: `${COLORS.PRIMARY.P500}`,
    },
  },
});

const ProductsDisplay: FC<ProductsDisplayInterface> = ({ title, products }) => {
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
    {_id: 'product-skeleton-1'},
    {_id: 'product-skeleton-2'},
    {_id: 'product-skeleton-3'},
    {_id: 'product-skeleton-4'},
    {_id: 'product-skeleton-5'},
    {_id: 'product-skeleton-6'},
    {_id: 'product-skeleton-7'},
    {_id: 'product-skeleton-8'},
  ];
  const isLargeScreen = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`);

  useEffect(() => {
    if (!_.isEmpty(products) || products === null) {
      setLoading(false);
    }
  }, [products]);

  const pageChangeHandler = (event: any, value: number) => {
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
          aspectRatio={isLargeScreen ? '21:9' : '16:9'}
        />
      </SlideShowContainerSC>
      <TitleContainerSC>
        {!_.isEmpty(title) && (
          <ProductsDisplayTitleSC variant="h5">{title}</ProductsDisplayTitleSC>
        )}
        <Sort sortMenuItem={sortMenuItem} setSortMenuItem={setSortMenuItem} />
      </TitleContainerSC>
      {(
        <ThemeProvider theme={theme}>
          <Grid container spacing={3} sx={{ marginBottom: "40px" }}>
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
              {_.isEmpty(products) && loading &&
              skeletonProducts.map(
                (product, index: number) => {
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
                }
              )}
          </Grid>
          {!_.isEmpty(products) && totalPages > 1 && (
            <PaginationStackSC>
              <Pagination
                count={totalPages}
                color="primary"
                page={currentPage}
                onChange={pageChangeHandler}
              />
            </PaginationStackSC>
          )}
        </ThemeProvider>
      )}

      {_.isEmpty(products) && !loading && (
        <ProductsDisplayEmptyTextSC variant="body1">
          No products...
        </ProductsDisplayEmptyTextSC>
      )}
    </ProductsDisplaySC>
  );
};

export default ProductsDisplay;
