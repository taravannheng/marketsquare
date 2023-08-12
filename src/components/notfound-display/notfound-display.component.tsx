import { FC } from "react";
import { useMediaQuery } from "@mui/material";

import { BodySC, ButtonSC, NotFoundDisplaySC, SubtitleSC, TextSC, TitleSC } from "./notfound-display.styles";
import { NotFoundI } from "./notfound-display.interface";
import NotFoundIllustration from "../../assets/illustrations/notfound.png";
import { ROUTES } from "../../utils/constants";

const NotFoundDisplay: FC<NotFoundI> = () => {
  const isBigScreen = useMediaQuery("(min-width: 864px)");

  return (
    <NotFoundDisplaySC>
      <img
        src={NotFoundIllustration}
        alt="404 Illustration"
        width={`${isBigScreen ? "431" : "200"}}`}
        height={`${isBigScreen ? "500" : "232"}}`}
      />
      <BodySC>
        <TitleSC>Oooops!</TitleSC>
        <SubtitleSC>This is embarrasing.</SubtitleSC>
        <TextSC>The page you are trying to visit is not available.</TextSC>
        <ButtonSC href={`${ROUTES.LANDING}`}>
          Back to Homepage
        </ButtonSC>
      </BodySC>
    </NotFoundDisplaySC>
  );
};

export default NotFoundDisplay;
