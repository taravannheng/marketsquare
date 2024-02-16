import React, { FC } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";

import { ProfileDisplaySC } from "./profile-display.styles";
import ProfileDisplayProps from "./profile-display.interface";

import Avatar from "../avatar/avatar.component";
import ProfileForm from "../profile-form/profile-form.component";
import { selectUser } from "../../store/user/user.selector";

const ProfileDisplay: FC<ProfileDisplayProps> = () => {
  const user = useSelector(selectUser);
  const isBigScreen = useMediaQuery("(min-width: 640px)");

  return (
    <ProfileDisplaySC>
      <Avatar src={user?.profileUrl} size={isBigScreen ? "large" : "medium"} />
      <ProfileForm />
    </ProfileDisplaySC>
  );
};

export default ProfileDisplay;
