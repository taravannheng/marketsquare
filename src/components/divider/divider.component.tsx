import { FC } from "react";

import DividerProps from "./divider.interface";
import { DividerSC } from "./divider.styles";
import { COLORS } from '../../styles/styles';

const Divider: FC<DividerProps> = ({ width, height, color }) => {
  return (
    <DividerSC
      sx={{
        width: `${width ?? '100%'} !important`,
        height: `${height ?? '1px'} !important`,
        backgroundColor: `${color ?? COLORS.NEUTRAL.N50} !important`,
      }}
    />
  );
};

export default Divider;
