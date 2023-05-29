import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import ProductCard from "../product-card/index.component";
import SlideShow from "../slideshow/index.component";
import ProductCategory from "../product-category/index.component";
import ProductsDisplayInterface from "./index.interface";
import ProductInterface from "../../interfaces/product-interface";
import {
  ProductsDisplaySC,
  ProductsDisplayTitleSC,
  ProductsDisplayEmptyTextSC,
  PaginationStackSC,
  SlideShowContainerSC,
} from "./index.styles";
import slideShowSample from "../../sample/slideshow/slideshow-sample";
import { Pagination, Stack } from "@mui/material";
import colors from "../../styles/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProgressIndicator from "../progress-indicator/index.component";

const theme = createTheme({
  palette: {
    primary: {
      main: "#758AE3",
    },
  },
});

const ProductsDisplay: FC<ProductsDisplayInterface> = ({ title, products }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  let totalPages = !_.isEmpty(products) ? Math.ceil(products.length / productsPerPage) : 0;
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  let displayedProducts = !_.isEmpty(products) ? products.slice(startIndex, endIndex) : [];

  useEffect(() => {
    if (!_.isEmpty(products) || products === null) {
      setLoading(false);
    }
  }, [products]);

  const pageChangeHandler = (event: any, value: number) => {
    setCurrentPage(value);
  };

  return (
    <ProductsDisplaySC>
      <SlideShowContainerSC>
        <SlideShow indicatorType="dot" images={slideShowSample} autoSlide />
      </SlideShowContainerSC>
      {!_.isEmpty(title) && (
        <ProductsDisplayTitleSC variant="h5">{title}</ProductsDisplayTitleSC>
      )}
      {loading && <ProgressIndicator />}
      {!loading && (
        <ThemeProvider theme={theme}>
          <Grid container spacing={3} sx={{ marginBottom: "40px" }}>
            {!_.isEmpty(products) &&
              displayedProducts.map(
                (product: ProductInterface, index: number) => {
                  return (
                    <Grid item xs={6} lg={4} xl={3} key={uuidv4()}>
                      <ProductCard {...product} />
                    </Grid>
                  );
                }
              )}
          </Grid>
          {!_.isEmpty(products) && (
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
      <ProductCategory title="Shop by Brands" images={slideShowSample} />
    </ProductsDisplaySC>
  );
};

export default ProductsDisplay;
