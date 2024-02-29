import { FC, useState } from "react";

// props or interfaces imports
import SeeMoreTextProps from "./see-more-text.interface";

// styling imports
import { ButtonSC, SeeMoreTextSC } from "./see-more-text.styles";

const SeeMoreText: FC<SeeMoreTextProps> = ({
  children,
  defaultTextLength = 100,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shortenedText =
    children && children.slice(0, defaultTextLength) + "...";

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <SeeMoreTextSC>
      {isExpanded ? children : shortenedText}
      <ButtonSC
        onClick={handleClick}
        disableRipple
        sx={{ display: isExpanded ? "block !important" : "inline !important" }}
      >
        {isExpanded ? `See Less` : "See More"}
      </ButtonSC>
    </SeeMoreTextSC>
  );
};

export default SeeMoreText;
