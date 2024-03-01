import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 3rd-party dependencies imports
import { useSelector } from "react-redux";

// component imports
import Header from "../../components/header/index.component";
import WishlistDisplay from "../../components/wishlist-display/wishlist-display.component";
import SnackBar from "../../components/snackbar/snackbar.component";

// state management imports
import { selectUser } from "../../store/user/user.selector";

// styling imports
import { PageSC } from "./wishlist.styles";

// constants or helper functions imports
import { ROUTES } from "../../utils/constants";

const WishlistPage: FC = () => {
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

  const closeSnackbar = () => {
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
      navigate(`${ROUTES.WISHLIST}`);
    }
  }, []);

  return (
    <>
      <PageSC>
        <Header />
        <WishlistDisplay />
      </PageSC>
      <SnackBar
          type={snackbar.type}
          message={snackbar.message}
          onClose={closeSnackbar}
          open={snackbar.open}
        />
    </>
  );
};

export default WishlistPage;
