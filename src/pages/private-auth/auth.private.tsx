import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

// 3rd-party dependencies imports
import _ from "lodash";
import { useSelector } from "react-redux";

// state management imports
import { selectUser } from "../../store/user/user.selector";

// constants or helper functions imports
import { ROUTES } from "../../utils/constants";

const PrivateAuthRoute: FC = () => {
  const user = useSelector(selectUser);

  return !_.isEmpty(user) ? (
    <Navigate to={ROUTES.LANDING} />
  ) : (
    <Outlet />
  );
};

export default PrivateAuthRoute;