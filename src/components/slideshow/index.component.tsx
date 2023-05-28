import { FC, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

import Button from "../button/index.component";
import SlideShowInterface from "./index.interface";
import colors from "../../styles/colors";
import { Box } from "@mui/material";
import {
  IndicatorTextSC,
  NextButtonSC,
  PrevButtonSC,
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

const SlideShow: FC<SlideShowInterface> = ({ images, indicatorType }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);

  const prevButtonHandler = () => {
    if (activeItemIndex !== 0) {
      setActiveItemIndex((prevIndex) => prevIndex - 1);
    }

    if (activeItemIndex === 0) {
      setActiveItemIndex(images.length - 1);
    }
  };

  const paginationIndicatorHandler = (index: number) => {
    setActiveItemIndex(index);
  };

  const nextButtonHandler = () => {
    if (activeItemIndex !== images.length - 1) {
      setActiveItemIndex((prevIndex) => prevIndex + 1);
    }

    if (activeItemIndex === images.length - 1) {
      setActiveItemIndex(0);
    }
  };

  return (
    <SlideShowSC>
      <SlideShowCardSC>
        {!_.isEmpty(images) &&
          images.map((image: string, index: number) => {
            return (
              <SlideShowMediaSC
                key={index}
                image={image}
                sx={{ transform: `translateY(-${activeItemIndex * 100}%)` }}
              />
            );
          })}
      </SlideShowCardSC>
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
            {!_.isEmpty(images) &&
              images.map((image: string, index: number) => {
                if (index === activeItemIndex) {
                  return (
                    <SlideShowPaginationActiveIndicatorSC
                      key={uuidv4()}
                      onClick={() => paginationIndicatorHandler(index)}
                    ></SlideShowPaginationActiveIndicatorSC>
                  );
                }
                return (
                  <SlideShowPaginationIndicatorSC
                    key={uuidv4()}
                    onClick={() => paginationIndicatorHandler(index)}
                  ></SlideShowPaginationIndicatorSC>
                );
              })}
          </SlideShowPaginationIndicatorStackSC>
        )}
        {indicatorType === "number" && (
          <IndicatorTextSC variant="h5">
            {activeItemIndex + 1}/{images.length}
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
    </SlideShowSC>
  );
};

export default SlideShow;
