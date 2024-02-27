import { FC, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


import { PageSC } from './order.styles';

import Header from '../../components/header/index.component';
import OrderListDisplay from '../../components/order-list-display/order-list-display.component';
import SnackBar from '../../components/snackbar/snackbar.component';

import { ROUTES } from '../../utils/constants';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/user.selector';

const OrderHistoryPage: FC = () => {
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
      navigate(`${ROUTES.ORDER_HISTORY}`);
    }
  }, []);

  return (
    <>
    <PageSC>
      <Header />
      <OrderListDisplay />
    </PageSC>
      <SnackBar
          type={snackbar.type}
          message={snackbar.message}
          onClose={closeSnackbar}
          open={snackbar.open}
        />
    </>
    
  )
}

export default OrderHistoryPage;