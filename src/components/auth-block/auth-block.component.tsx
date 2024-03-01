import { FC } from "react";

// props or interfaces imports
import AuthBlockProps from "./auth-block.interface";

// component imports
import Button from "../button/button.component";

// constants or helper function imports
import { ROUTES } from "../../utils/constants";

// styling imports
import {
  AuthBlockSC,
} from "./auth-block.styles";

const AuthBlock: FC<AuthBlockProps> = () => {
  return (
    <AuthBlockSC>
      <Button width="full" href={`${ROUTES.SIGN_UP}`}>Sign Up</Button>
      <Button styleType="secondary" width="full" href={`${ROUTES.SIGN_IN}`}>Sign In</Button>
    </AuthBlockSC>
  );
};

export default AuthBlock;
