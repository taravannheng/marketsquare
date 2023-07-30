import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import _ from "lodash";


import { ROUTES } from "../../utils/constants";
import { selectUser } from "../../store/user/user.selector";

const PrivateAuthRoute: FC = () => {
  const user = useSelector(selectUser);

  return !_.isEmpty(user) ? (
    <Navigate to={ROUTES.LANDING} />
  ) : (
    <Outlet />
  );
};

export default PrivateAuthRoute;