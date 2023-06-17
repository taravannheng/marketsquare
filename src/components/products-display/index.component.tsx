import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useMediaQuery } from "@mui/material";

import Sort from "../sort/sort.component";
import ProductCard from "../product-card/index.component";
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
import colors from "../../styles/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getSlideshow } from "../../apis/slideshows/slideshow.api";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";
import { SLIDESHOWIDS } from "../../utils/constants";
import { getProductsPerPage } from "../../utils/helpers";

const theme = createTheme({
  palette: {
    primary: {
      main: `${colors.primary}`,
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
  const isSmallScreen = useMediaQuery("(max-width: 639px)");

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
      {isSmallScreen && <Search />}
      <SlideShowContainerSC>
        <SlideShow
          indicatorType="dot"
          data={!_.isEmpty(slideshow) ? slideshow : []}
          autoSlide
          redirectOnClick
        />
      </SlideShowContainerSC>
      <TitleContainerSC>
        {!_.isEmpty(title) && (
          <ProductsDisplayTitleSC variant="h5">{title}</ProductsDisplayTitleSC>
        )}
        <Sort sortMenuItem={sortMenuItem} setSortMenuItem={setSortMenuItem} />
      </TitleContainerSC>
      {loading && <ProgressIndicator />}
      {!loading && (
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
      {/* <ProductCategory title="Shop by Brands" images={[]} /> */}
    </ProductsDisplaySC>
  );
};

export default ProductsDisplay;
