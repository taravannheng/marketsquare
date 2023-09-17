import { ReactNode } from "react";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";

interface SlideShowInterface  {
  children?: ReactNode;
  data: SlideShowItemInterface[]
  indicatorType: 'dot' | 'number';
  autoSlide?: boolean;
  redirectOnClick?: boolean;
  aspectRatio?: '16:9' | '4:3' | '1:1'  | '21:9';
}

export default SlideShowInterface;