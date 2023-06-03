import { FC } from 'react';

import LoadingScreenInterface from './index.interface';
import { LoadingScreenSC } from './index.styles';

const LoadingScreen: FC<LoadingScreenInterface> = () => {
  return (
    <LoadingScreenSC>
      <img alt='logo animation' src='https://firebasestorage.googleapis.com/v0/b/marketsquare-62b8e.appspot.com/o/logos%2Flogo-animation.svg?alt=media&token=20aebabf-5096-4f12-af5d-2abcc391574a&_gl=1*15rkgfk*_ga*MTcyMjg1OTQuMTY4NTMxNjU0MA..*_ga_CW55HF8NVT*MTY4NTUzNzc5Mi4zLjEuMTY4NTU0NTg4OC4wLjAuMA..' width="120" height="120" />
    </LoadingScreenSC>
  )
}

export default LoadingScreen;