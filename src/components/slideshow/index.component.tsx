import { FC, useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";

import SlideshowSkeleton from "./slideshow-skeleton.component";
import Button from "../button/index.component";
import SlideShowInterface from "./index.interface";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";
import colors from "../../styles/colors";
import { Box } from "@mui/material";
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

const SlideShow: FC<SlideShowInterface> = ({
  data,
  indicatorType,
  autoSlide = false,
  redirectOnClick = false,
}) => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0);

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
                image={item.imgUrl}
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
              type="rounded"
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
              type="rounded"
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
