import { FC } from 'react'

import DividerInterface from './divider.interface';
import { DividerSC } from './divider.styles';

const Divider: FC<DividerInterface> = ({ width, height, color }) => {
  return (
    <DividerSC sx={{ width: `${width && width} !important`, height: `${height && height} !important`, backgroundColor: `${color && color} !important` }} />
  )
}

export default Divider;