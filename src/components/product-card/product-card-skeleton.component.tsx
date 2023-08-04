import { FC } from 'react';

import { ContentSC, MediaSC, RatingSC, SkeletonSC, TitleSC } from './product-card-skeleton.styles';

const ProductCardSkeleton: FC = () => {
  return (
    <SkeletonSC>
      <MediaSC></MediaSC>
      <ContentSC>
        <TitleSC></TitleSC>
        <RatingSC></RatingSC>
      </ContentSC>
    </SkeletonSC>
  )
}

export default ProductCardSkeleton;