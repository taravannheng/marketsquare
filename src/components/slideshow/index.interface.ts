import { ReactNode } from "react";

interface SlideShowInterface  {
  children?: ReactNode;
  images: string[];
  indicatorType: 'dot' | 'number';
  autoSlide?: boolean;
}

export default SlideShowInterface;