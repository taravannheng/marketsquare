import { FC, useState } from "react";

import SeeMoreTextProps from "./see-more-text.interface";
import { ButtonSC, SeeMoreTextSC } from "./see-more-text.styles";

const SeeMoreText: FC<SeeMoreTextProps> = ({
  children,
  defaultTextLength = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortenedText =
    children && children.slice(0, defaultTextLength) + "...";

  const clickHandler = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SeeMoreTextSC>
      {isExpanded ? children : shortenedText}
      <ButtonSC
        onClick={clickHandler}
        disableRipple
        sx={{ display: isExpanded ? "block !important" : "inline !important" }}
      >
        {isExpanded ? `See Less` : "See More"}
      </ButtonSC>
    </SeeMoreTextSC>
  );
};

export default SeeMoreText;
