import { FC } from "react";

// 3rd-party dependencies imports
import { useSelector } from "react-redux";

// component imports
import Avatar from "../avatar/avatar.component";
import ProfileForm from "../profile-form/profile-form.component";

// state management imports
import { selectUser } from "../../store/user/user.selector";

// props or interfaces imports
import ProfileDisplayProps from "./profile-display.interface";

// styling imports
import { ProfileDisplaySC } from "./profile-display.styles";

const ProfileDisplay: FC<ProfileDisplayProps> = () => {
  const user = useSelector(selectUser);

  return (
    <ProfileDisplaySC>
      <Avatar src={user?.profileUrl} size="large" />
      <ProfileForm />
    </ProfileDisplaySC>
  );
};

export default ProfileDisplay;
