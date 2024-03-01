import { FC } from 'react';

// props or interfaces imports
import LoadingScreenProps from './index.interface';

// styling imports
import { LoadingScreenSC } from './index.styles';

// constants or helper functions improts
import { LOGO_URLS } from '../../utils/constants';

const LoadingScreen: FC<LoadingScreenProps> = () => {
  return (
    <LoadingScreenSC>
      <img alt='logo animation' src={LOGO_URLS.ANIMATION} width="120" height="120" />
    </LoadingScreenSC>
  )
}

export default LoadingScreen;