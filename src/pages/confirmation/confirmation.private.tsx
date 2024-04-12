import { FC } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import _ from "lodash";
import { ROUTES } from "../../utils/constants";

const PrivateConfirmationRoute: FC = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const success = params.get("success");
  const cartID = params.get("cartID");
  
  return (!_.isEmpty(cartID)) ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.LANDING} />
  );
};

export default PrivateConfirmationRoute;