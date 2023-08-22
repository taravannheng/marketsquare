import { FC } from "react";

import DividerInterface from "./divider.interface";
import { DividerSC } from "./divider.styles";
import { colors } from '../../styles/styles';

const Divider: FC<DividerInterface> = ({ width, height, color }) => {
  return (
    <DividerSC
      sx={{
        width: `${width ?? '100%'} !important`,
        height: `${height ?? '1px'} !important`,
        backgroundColor: `${color ?? colors.light} !important`,
      }}
    />
  );
};

export default Divider;
