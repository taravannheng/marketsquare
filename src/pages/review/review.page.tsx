import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import { PageSC } from './review.styles';

import Header from '../../components/header/index.component';
import ReviewListDisplay from '../../components/review-list-display/review-list-display.component';
import SnackBar from '../../components/snackbar/snackbar.component';

import { ROUTES } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/user.selector';

const ReviewPage: FC = () => {
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
      navigate(`${ROUTES.REVIEWS}`);
    }
  }, []);

  return (
    <>
    <PageSC>
      <Header />
      <ReviewListDisplay />
    </PageSC>
      <SnackBar
          type={snackbar.type}
          message={snackbar.message}
          onClose={snackbarCloseHandler}
          open={snackbar.open}
        />
    </>
    
  )
}

export default ReviewPage;