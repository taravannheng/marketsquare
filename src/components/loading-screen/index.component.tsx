import { FC } from 'react';

import LoadingScreenProps from './index.interface';
import { LoadingScreenSC } from './index.styles';
import { LOGO_URLS } from '../../utils/constants';

const LoadingScreen: FC<LoadingScreenProps> = () => {
  return (
    <LoadingScreenSC>
      <img alt='logo animation' src={LOGO_URLS.ANIMATION} width="120" height="120" />
    </LoadingScreenSC>
  )
}

export default LoadingScreen;