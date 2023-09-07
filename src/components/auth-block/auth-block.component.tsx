import { FC } from "react";

import AuthBlockProps from "./auth-block.interface";
import {
  AuthBlockSC,
} from "./auth-block.styles";
import { ROUTES } from "../../utils/constants";
import Button from "../button/button.component";

const AuthBlock: FC<AuthBlockProps> = () => {
  return (
    <AuthBlockSC>
      <Button width="full" href={`${ROUTES.SIGN_UP}`}>Sign Up</Button>
      <Button styleType="secondary" width="full" href={`${ROUTES.SIGN_IN}`}>Sign In</Button>
    </AuthBlockSC>
  );
};

export default AuthBlock;
