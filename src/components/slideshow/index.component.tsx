import { FC, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// 3rd-party dependencies imports
import _ from "lodash";
import { useMediaQuery } from "@mui/material";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

// component imports
import SlideshowSkeleton from "./slideshow-skeleton.component";
import IconButton from "../icon-button/icon-button.component";

// props or interfaces imports
import SlideShowProps from "./index.interface";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";

// styling imports
import {
  NextButtonSC,
  PrevButtonSC,
  SkeletonContainerSC,
  CardSC,
  MediaSC,
  PaginationActiveIndicatorSC,
  PaginationIndicatorSC,
  PaginationIndicatorStackSC,
  SlideShowSC,
  ControlSC,
  ControlButtonContainerSC,
} from "./index.styles";

// constants or helper functions imports
import { adjustCloudinaryImgSize } from "../../utils/helpers";

const SlideShow: FC<SlideShowProps> = ({
  data,
  indicatorType,
  autoSlide = false,
  redirectOnClick = false,
  aspectRatio = "16:9",
}) => {
  const navigate = useNavigate();
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const touchStartX = useRef(0);

  // ADJUST IMAGE SIZE
  const DEFAULT_IMG_SIZE = 1024;
  const ORIGINAL_IMG_SIZE = 0; // use original image size
  let imgSize = DEFAULT_IMG_SIZE;
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
  const isMediumScreen = useMediaQuery("(max-width: 768px)");
  const isLargeScreen = useMediaQuery("(max-width: 1024px)");
  const isExtraLargeScreen = useMediaQuery("(min-width: 1024px)");

  // DETERMINE ASPECT RATIO
  let paddingBottom = "56.25%"; // 16:9 Default Aspect Ratio

  switch (aspectRatio) {
    case "1:1":
      paddingBottom = "100%";
      break;
    case "4:3":
      paddingBottom = "75%";
      break;
    case "16:9":
      paddingBottom = "56.25%";
      break;
    case "21:9":
      paddingBottom = "42.86%";
      break;
    default:
      paddingBottom = "56.25%";
      break;
  }

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

  const handlePrevButtonClick = () => {
    setActiveItemIndex(
      (prevIndex) => (prevIndex - 1 + data.length) % data.length
    );
  };

  const handleSetActiveIndicator = (index: number) => {
    setActiveItemIndex(index);
  };

  const handleNextButtonClick = () => {
    setActiveItemIndex((prevSlide) => (prevSlide + 1) % data.length);
  };

  const handleRedirect = (productID: string) => {
    if (!_.isEmpty(productID) && redirectOnClick) {
      navigate(`/product/${productID}`);
    }
  };

  const handleTouchStart = (e: any) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: any) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diffX = touchStartX.current - touchEndX;
    const swipeThreshold = 50;

    if (diffX > swipeThreshold) {
      // swipe left
      handleNextButtonClick();
    }
    if (diffX < -swipeThreshold) {
      // swipe right
      handlePrevButtonClick();
    }
  };

  return (
    <SlideShowSC>
      {_.isEmpty(data) && (
        <SkeletonContainerSC>
          <SlideshowSkeleton />
        </SkeletonContainerSC>
      )}
      {!_.isEmpty(data) && (
        <CardSC
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          sx={{ paddingBottom }}
        >
          {!_.isEmpty(data) &&
            data.map((item: SlideShowItemInterface, index: number) => {
              return (
                <MediaSC
                  key={`slide-media-${item?._id ?? index}`}
                  image={imgUrls[index]}
                  sx={{
                    left: `${index * 100}%`,
                    transform: `translateX(-${activeItemIndex * 100}%)`,
                    "&:hover": {
                      cursor: `${redirectOnClick ? "pointer" : "auto"}`,
                    },
                  }}
                  onClick={() => handleRedirect(item?._id ?? "")}
                />
              );
            })}
        </CardSC>
      )}
      {data.length > 1 && (
        <ControlSC>
          {indicatorType === "dot" && (
            <PaginationIndicatorStackSC direction="row" spacing={1}>
              {!_.isEmpty(data) &&
                data.map((item: SlideShowItemInterface, index: number) => {
                  if (index === activeItemIndex) {
                    return (
                      <PaginationActiveIndicatorSC
                        key={`slide-pagination-active-indicator-${item._id}`}
                        onClick={() => handleSetActiveIndicator(index)}
                      ></PaginationActiveIndicatorSC>
                    );
                  }
                  return (
                    <PaginationIndicatorSC
                      key={`slide-pagination-active-indicator-${item._id}`}
                      onClick={() => handleSetActiveIndicator(index)}
                    ></PaginationIndicatorSC>
                  );
                })}
            </PaginationIndicatorStackSC>
          )}
          <ControlButtonContainerSC>
            <PrevButtonSC>
              <IconButton
                size="medium"
                onClick={handlePrevButtonClick}
                icon={<ChevronLeftRoundedIcon />}
              />
            </PrevButtonSC>
            <NextButtonSC>
              <IconButton
                size="medium"
                onClick={handleNextButtonClick}
                icon={<ChevronRightRoundedIcon />}
              />
            </NextButtonSC>
          </ControlButtonContainerSC>
        </ControlSC>
      )}
    </SlideShowSC>
  );
};

export default SlideShow;
