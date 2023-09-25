import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import _ from "lodash";
import { useSelector } from "react-redux";

import { ROUTES } from "../../utils/constants";
import { selectUser } from "../../store/user/user.selector";

const PrivateReviewRoute: FC = () => {
  const user = useSelector(selectUser);
  
  return (!_.isEmpty(user)) ? (
    <Outlet />
  ) : (
    <Navigate to={`${ROUTES.SIGN_IN}?reviews=true&redirectUrl=${ROUTES.REVIEWS}`} />
  );
};

export default PrivateReviewRoute;