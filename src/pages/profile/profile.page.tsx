import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 3rd-party dependencies imports
import { useSelector } from "react-redux";

// component imports
import Header from "../../components/header/index.component";
import SnackBar from "../../components/snackbar/snackbar.component";
import ProfileDisplay from "../../components/profile-display/profile-display.component";

// state management imports
import { selectUser } from "../../store/user/user.selector";

// styling imports
import { PageSC } from "./profile.styles";

// constants or helper functions imports
import { ROUTES } from "../../utils/constants";

const ProfilePage: FC = () => {
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isSignedIn = params.get("signedIn");
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    message: string;
    type: "info" | "success" | "error";
  }>({
    open: false,
    message: "",
    type: "info",
  });

  const snackbarCloseHandler = () => {
    setSnackbar({
      open: false,
      message: "",
      type: "info",
    });
  };

  useEffect(() => {
    if (isSignedIn && user) {
      setSnackbar({
        open: true,
        message: "You have successfully signed in!",
        type: "success",
      });

      // navigate to home page to reset the url to prevent the snackbar from appearing again
      navigate(`${ROUTES.PROFILE}`);
    }
  }, []);

  return (
    <>
      <PageSC>
        <Header />
        <ProfileDisplay />
      </PageSC>
      <SnackBar
          type={snackbar.type}
          message={snackbar.message}
          onClose={snackbarCloseHandler}
          open={snackbar.open}
        />
    </>
  );
};

export default ProfilePage;
