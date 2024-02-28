import { FC } from "react";

// 3rd-party dependencies imports
import { useMediaQuery } from "@mui/material";

// props or interfaces imports
import { NotFoundI } from "./notfound-display.interface";

// styling imports
import {
  BodySC,
  ButtonSC,
  NotFoundDisplaySC,
  SubtitleSC,
  TextSC,
  TitleSC,
} from "./notfound-display.styles";

// constants or helper functions imports
import { ROUTES } from "../../utils/constants";

// asset imports
import NotFoundIllustration from "../../assets/illustrations/notfound.png";

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
        <ButtonSC href={`${ROUTES.LANDING}`}>Back to Homepage</ButtonSC>
      </BodySC>
    </NotFoundDisplaySC>
  );
};

export default NotFoundDisplay;
