import { FC, useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import ProductCard from "../product-card/index.component";
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
} from "./index.styles";
import slideShowSample from "../../sample/slideshow/slideshow-sample";
import { Pagination, Stack } from "@mui/material";
import colors from "../../styles/colors";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { getSlideshow } from "../../apis/slideshows/slideshow.api";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";
import { SLIDESHOWIDS } from "../../utils/constants";

const theme = createTheme({
  palette: {
    primary: {
      main: `${colors.primary}`,
    },
  },
});

const ProductsDisplay: FC<ProductsDisplayInterface> = ({ title, products }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [slideshow, setSlideshow] = useState<SlideShowItemInterface[]>(
    [] as SlideShowItemInterface[]
  );
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

  useEffect(() => {
    const fetchSlideshow = async () => {
      const response = await getSlideshow(SLIDESHOWIDS.LANDING);

      if (!_.isEmpty(response.data)) {
        setSlideshow(response.data.items);
      }
    };

    fetchSlideshow();
  }, []);

  return (
    <ProductsDisplaySC>
      <SlideShowContainerSC>
        <SlideShow
          indicatorType="dot"
          data={!_.isEmpty(slideshow) ? slideshow : []}
          autoSlide
          redirectOnClick
        />
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
      {/* <ProductCategory title="Shop by Brands" images={[]} /> */}
    </ProductsDisplaySC>
  );
};

export default ProductsDisplay;
