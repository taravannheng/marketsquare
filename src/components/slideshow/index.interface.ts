import { ReactNode } from "react";
import SlideShowItemInterface from "../../interfaces/slideshow-item.interface";

interface SlideShowInterface  {
  children?: ReactNode;
  data: SlideShowItemInterface[]
  indicatorType: 'dot' | 'number';
  autoSlide?: boolean;
  redirectOnClick?: boolean;
}

export default SlideShowInterface;