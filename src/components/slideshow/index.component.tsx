import { FC, useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import SlideshowSkeleton from "./slideshow-skeleton.component";
import Button from "../button/index.component";
import SlideShowInterface from "./index.interface";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";
import COLORS from "../../styles/colors";
import { Box, useMediaQuery } from "@mui/material";
import {
  IndicatorTextSC,
  NextButtonSC,
  PrevButtonSC,
  SkeletonContainerSC,
  SlideShowCardSC,
  SlideShowMediaSC,
  SlideShowPaginationActiveIndicatorSC,
  SlideShowPaginationIndicatorSC,
  SlideShowPaginationIndicatorStackSC,
  SlideShowPaginationNextButtonSC,
  SlideShowPaginationPrevButtonSC,
  SlideShowPaginationSC,
  SlideShowSC,
} from "./index.styles";
import { adjustCloudinaryImgSize } from "../../utils/helpers";

const SlideShow: FC<SlideShowInterface> = ({
  data,
  indicatorType,
  autoSlide = false,
  redirectOnClick = false,
}) => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  // ADJUST IMAGE SIZE
  const DEFAULT_IMG_SIZE = 1024;
  const ORIGINAL_IMG_SIZE = 0; // use original image size
  let imgSize = DEFAULT_IMG_SIZE;
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(max-width: 1024px)");
  const isExtraLargeScreen = useMediaQuery("(min-width: 1024px)");

  // DETERMINE IMAGE SIZE
  if (isExtraLargeScreen) {
    imgSize = ORIGINAL_IMG_SIZE; // use original image size
  }

  if (isLargeScreen) {
    imgSize = 1024;
  }

  if (isMediumScreen) {
    imgSize = 768;
  }

  if (isSmallScreen) {
    imgSize = 640;
  }

  // GET IMAGE URL
  const imgUrls = data.map((item: SlideShowItemInterface) => {
    return adjustCloudinaryImgSize(item.imgUrl, imgSize);
  });

  useEffect(() => {
    if (autoSlide) {
      const interval = setInterval(() => {
        setActiveItemIndex((prevSlide) => (prevSlide + 1) % data.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [data.length, autoSlide]);

  const prevButtonHandler = () => {
    if (activeItemIndex !== 0) {
      setActiveItemIndex((prevIndex) => (prevIndex - 1) % data.length);
    }
  };

  const paginationIndicatorHandler = (index: number) => {
    setActiveItemIndex(index);
  };

  const nextButtonHandler = () => {
    setActiveItemIndex((prevSlide) => (prevSlide + 1) % data.length);
  };

  const redirectHandler = (productID: string) => {
    if (!_.isEmpty(productID) && redirectOnClick) {
      navigate(`/product/${productID}`);
    }
  };

  return (
    <SlideShowSC>
      {_.isEmpty(data) && (
        <SkeletonContainerSC>
          <SlideshowSkeleton />
        </SkeletonContainerSC>
      )}
      <SlideShowCardSC>
        {!_.isEmpty(data) &&
          data.map((item: SlideShowItemInterface, index: number) => {
            return (
              <SlideShowMediaSC
                key={`slide-media-${item?._id ?? index}`}
                image={imgUrls[index]}
                sx={{
                  transform: `translateY(-${activeItemIndex * 100}%)`,
                  "&:hover": {
                    cursor: `${redirectOnClick ? "pointer" : "auto"}`,
                  },
                }}
                onClick={() => redirectHandler(item?._id ?? "")}
              />
            );
          })}
      </SlideShowCardSC>
      {data.length > 1 && (
        <SlideShowPaginationSC>
          <PrevButtonSC>
            <Button
              width="120px"
              height="36px"
              styleType="rounded"
              actionType="button"
              label="Prev"
              clickHandler={prevButtonHandler}
            />
          </PrevButtonSC>
          {indicatorType === "dot" && (
            <SlideShowPaginationIndicatorStackSC direction="row" spacing={1}>
              {!_.isEmpty(data) &&
                data.map((item: SlideShowItemInterface, index: number) => {
                  if (index === activeItemIndex) {
                    return (
                      <SlideShowPaginationActiveIndicatorSC
                        key={`slide-pagination-active-indicator-${item._id}`}
                        onClick={() => paginationIndicatorHandler(index)}
                      ></SlideShowPaginationActiveIndicatorSC>
                    );
                  }
                  return (
                    <SlideShowPaginationIndicatorSC
                      key={`slide-pagination-active-indicator-${item._id}`}
                      onClick={() => paginationIndicatorHandler(index)}
                    ></SlideShowPaginationIndicatorSC>
                  );
                })}
            </SlideShowPaginationIndicatorStackSC>
          )}
          {indicatorType === "number" && (
            <IndicatorTextSC variant="h5">
              {activeItemIndex + 1}/{data.length}
            </IndicatorTextSC>
          )}
          <NextButtonSC>
            <Button
              width="120px"
              height="36px"
              styleType="rounded"
              actionType="button"
              label="Next"
              clickHandler={nextButtonHandler}
            />
          </NextButtonSC>
        </SlideShowPaginationSC>
      )}
    </SlideShowSC>
  );
};

export default SlideShow;
