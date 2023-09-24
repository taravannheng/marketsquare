import { FC, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import Cookies from "js-cookie";
import { Box } from "@mui/material";

import PasswordInput from "../password-input/password-input.component";
import EmailInput from "../email-input/email-input.component";
import Divider from "../divider/divider.component";
import SignInFormInterface from "./sign-in-form.interface";
import {
  AlertContainerSC,
  SignUpSC,
  SignInFormSC,
  SocialLogoSC,
  TitleSC,
  InputContainerSC,
} from "./sign-in-form.style";
import { checkEmail, checkPassword } from "../../utils/helpers";
import { ROUTES } from "../../utils/constants";
import GoogleLogo from "../../assets/socials/social-google.png";
import { signIn } from "../../apis/signin/signin.api";
import EmailInterface from "../../interfaces/email.interface";
import PasswordInterface from "../../interfaces/password.interface";
import Alert from "../alert/alert.component";
import Button from "../button/button.component";
import space from "../../styles/spacing";

const SignInForm: FC<SignInFormInterface> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const isNewUser = params.get("newUser");
  const updatedPassword = params.get("updatedPassword");
  const wishlist = params.get("wishlist");
  const reviews = params.get("reviews");
  const redirectUrl = params.get("redirectUrl");
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState<boolean>(false);

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

    setIsLoading(true);

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
          // change loading state
          setIsLoading(false);

          // set cookie to expire in 1hr
          Cookies.set("jwt", response.data.token, { expires: 1 / 24 });

          // set user state
          dispatch({ type: "SET_USER", payload: response.data.user });

          // if redirectUrl is provided, redirect to that url
          if (redirectUrl) {
            navigate(`${redirectUrl}?signedIn=true`);
            return;
          }

          navigate(`${ROUTES.LANDING}?signedIn=true`);
        }
      } catch (error: any) {
        // change loading state
        setIsLoading(false);

        // display error message
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

    !isValidForm && setIsLoading(false);
  };

  useEffect(() => {
    if (isNewUser) {
      setAlert({
        type: "success",
        message: "You have successfully created an account! Please sign in.",
      });
      setAlertVisible(true);
    }

    if (wishlist) {
      setAlert({
        type: "info",
        message: "Please sign in to view your wishlist!",
      });
      setAlertVisible(true);
    }

    if (reviews) {
      setAlert({
        type: "info",
        message: "Please sign in to view your reviews!",
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
            hideCloseButton
          >
            {alert.message}
          </Alert>
        )}
      </AlertContainerSC>
      <InputContainerSC>
        <EmailInput email={email} onChange={emailChangeHandler} />
        <PasswordInput
          password={password}
          onChange={passwordChangeHandler}
          showTooltip={false}
        />
      </InputContainerSC>
      <Box sx={{ marginTop: `${space.xl}`, marginBottom: `${space.l}` }}>
        <Button
          actionType="submit"
          width="full"
          isLoading={isLoading}
          disabled={isLoading}
        >
          {isLoading ? "Signing In" : "Sign In"}
        </Button>
      </Box>
      <Box sx={{ marginBottom: `${space.l}` }}>
        <Button
          styleType="tertiary"
          href={`${ROUTES.RESET_PASSWORD_REQUEST}`}
          underlineLabel
          width="full"
        >
          Forgotten Password?
        </Button>
      </Box>
      <Divider />
      <Box sx={{ marginTop: `${space.xl}`, marginBottom: `${space.l}` }}>
        <Button
          styleType="secondary"
          actionType="submit"
          width="full"
          href={`${ROUTES.AUTH_GOOGLE}`}
          icon={<SocialLogoSC src={GoogleLogo} alt="social logo" />}
        >
          Sign In with Google
        </Button>
      </Box>
      <SignUpSC>
        Not yet a user?{" "}
        <Button styleType="tertiary" href={`${ROUTES.SIGN_UP}`} underlineLabel>
          Sign Up
        </Button>
      </SignUpSC>
    </SignInFormSC>
  );
};

export default SignInForm;
