import { FC, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import Cookies from 'js-cookie';

import PasswordInput from "../password-input/password-input.component";
import EmailInput from "../email-input/email-input.component";
import Divider from "../divider/divider.component";
import SignInFormInterface from "./sign-in-form.interface";
import {
  AlertContainerSC,
  ForgottenPasswordLinkSC,
  SignUpLinkSC,
  SignUpSC,
  SignInButtonSC,
  SignInFormSC,
  SignInWithFacebookButtonSC,
  SignInWithGoogleButtonSC,
  SocialLogoSC,
  TitleSC,
  InputContainerSC,
} from "./sign-in-form.style";
import { checkEmail, checkPassword } from "../../utils/helpers";
import { ROUTES } from "../../utils/constants";
import GoogleLogo from "../../assets/socials/social-google.png";
import FacebookLogo from "../../assets/socials/social-facebook.png";
import { signIn } from "../../apis/signin/signin.api";
import EmailInterface from "../../interfaces/email.interface";
import PasswordInterface from "../../interfaces/password.interface";
import Alert from "../alert/alert.component";

const SignInForm: FC<SignInFormInterface> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isNewUser = params.get("newUser");
  const updatedPassword = params.get("updatedPassword");

  const dispatch = useDispatch();

  const [email, setEmail] = useState<EmailInterface>({
    value: "",
    isValid: false,
    validityDetails: {
      isValidUsername: false,
      isValidDomain: false,
      isUnique: false,
      hasAt: false,
    },
  });

  const [password, setPassword] = useState<PasswordInterface>({
    value: "",
    isValid: false,
    validityDetails: {
      isValidLength: false,
      hasUppercaseLetter: false,
      hasLowercaseLetter: false,
      hasNumber: false,
      hasSpecialCharacter: false,
      hasNoSpaces: false,
    },
  });

  const [alert, setAlert] = useState<{
    type: "info" | "success" | "error";
    message: string;
  }>({
    type: "error",
    message: "",
  });
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const emailChangeHandler = async (event: any) => {
    const email = event.target.value;

    const { isValid, validityDetails } = checkEmail(email);
    const { isValidUsername, isValidDomain, hasAt } = validityDetails;

    setEmail({
      value: email,
      isValid: isValid,
      validityDetails: {
        isValidUsername,
        isValidDomain,
        hasAt,
      },
    });
  };

  const passwordChangeHandler = (event: any) => {
    const password = event.target.value;

    const passwordStatus = checkPassword(password);
    const { isValid, validityDetails } = passwordStatus;
    const {
      isValidLength,
      hasUppercaseLetter,
      hasLowercaseLetter,
      hasNumber,
      hasSpecialCharacter,
      hasNoSpaces,
    } = validityDetails;

    setPassword({
      value: password,
      isValid,
      validityDetails: {
        isValidLength,
        hasUppercaseLetter,
        hasLowercaseLetter,
        hasNumber,
        hasSpecialCharacter,
        hasNoSpaces,
      },
    });
  };

  const formHandler = async (event: any) => {
    event.preventDefault();

    const isValidForm = email.isValid && password.isValid;
    let user;

    if (isValidForm) {
      user = {
        email: email.value,
        password: password.value,
      };

      try {
        const response = await signIn(user);

        if (response.status === 200) {

          // set cookie to expire in 1hr
          Cookies.set('jwt', response.data.token, { expires: 1/24 });

          // set user state
          dispatch({ type: "SET_USER", payload: response.data.user });

          navigate(`${ROUTES.LANDING}?signedIn=true`);
        }
      } catch (error: any) {
        if (error.response.status === 401) {
          setAlert({
            type: "error",
            message: "Email or password is incorrect. Please try again!",
          });
          return setAlertVisible(true);
        }

        setAlert({
          type: "error",
          message: "Internal Server Error! Please try again later.",
        });
        setAlertVisible(true);
      }
    }
  };

  useEffect(() => {
    if (isNewUser) {
      setAlert({
        type: "success",
        message: "You have successfully created an account! Please sign in.",
      });
      setAlertVisible(true);
    }

    if (updatedPassword) {
      setAlert({
        type: "success",
        message: "You have successfully updated your password! Please sign in.",
      });
      setAlertVisible(true);
    }
}, []);

  return (
    <SignInFormSC onSubmit={formHandler}>
      <TitleSC variant="h1">Sign In</TitleSC>
      <AlertContainerSC>
        {alertVisible && (
          <Alert
            alertVisible
            setAlertVisible={setAlertVisible}
            type={alert.type}
          >
            {alert.message}
          </Alert>
        )}
      </AlertContainerSC>
      <InputContainerSC>
        <EmailInput email={email} onChange={emailChangeHandler} />
        <PasswordInput password={password} onChange={passwordChangeHandler} showTooltip={false} />
      </InputContainerSC>
      <SignInButtonSC type="submit">Sign In</SignInButtonSC>
      <ForgottenPasswordLinkSC href={`${ROUTES.RESET_PASSWORD_REQUEST}`}>
        Forgotten password?
      </ForgottenPasswordLinkSC>
      <Divider />
      <SignInWithGoogleButtonSC href={`${ROUTES.AUTH_GOOGLE}`}>
        <SocialLogoSC src={GoogleLogo} alt="social logo" />
        Sign In with Google
      </SignInWithGoogleButtonSC>
      {/* <SignInWithFacebookButtonSC href={`${ROUTES.AUTH_FACEBOOK}`}>
        <SocialLogoSC src={FacebookLogo} alt="social logo" />
        Sign In with Facebook
      </SignInWithFacebookButtonSC> */}
      <SignUpSC>
        Not yet a user?{" "}
        <SignUpLinkSC href={`${ROUTES.SIGN_UP}`}>Sign Up</SignUpLinkSC>
      </SignUpSC>
    </SignInFormSC>
  );
};

export default SignInForm;
