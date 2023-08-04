import { FC } from "react";

import AuthBlockI from "./auth-block.interface";
import {
  AuthBlockSC,
  SignInButtonSC,
  SignUpButtonSC,
} from "./auth-block.styles";
import { ROUTES } from "../../utils/constants";

const AuthBlock: FC<AuthBlockI> = () => {
  return (
    <AuthBlockSC>
      <SignUpButtonSC type="button" href={`${ROUTES.SIGN_UP}`}>
        Sign Up
      </SignUpButtonSC>
      <SignInButtonSC type="button" href={`${ROUTES.SIGN_IN}`}>
        Sign In
      </SignInButtonSC>
    </AuthBlockSC>
  );
};

export default AuthBlock;
