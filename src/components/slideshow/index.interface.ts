import { ReactNode } from "react";

interface SlideShowInterface  {
  children?: ReactNode;
  images: string[];
  indicatorType: 'dot' | 'number';
}

export default SlideShowInterface;