import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import _ from "lodash";

import UsernameInput from "../username-input/username-input.component";
import PasswordInput from "../password-input/password-input.component";
import EmailInput from "../email-input/email-input.component";
import Divider from "../divider/index.component";
import SignUpFormInterface from "./sign-up-form.interface";
import {
  AlertContainerSC,
  SignInLinkSC,
  SignInSC,
  SignUpButtonSC,
  SignUpFormSC,
  SignUpWithFacebookButtonSC,
  SignUpWithGoogleButtonSC,
  SocialLogoSC,
  TitleSC,
} from "./sign-up-form.style";
import { checkEmail, checkPassword, checkUsername } from "../../utils/helpers";
import { ROUTES } from "../../utils/constants";
import GoogleLogo from "../../assets/socials/social-google.png";
import FacebookLogo from "../../assets/socials/social-facebook.png";
import { createUser, getUserByEmail } from "../../apis/users/users.api";
import UsernameInterface from "../../interfaces/username.interface";
import EmailInterface from "../../interfaces/email.interface";
import PasswordInterface from "../../interfaces/password.interface";
import Alert from "../alert/alert.component";

const SignUpForm: FC<SignUpFormInterface> = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState<UsernameInterface>({
    value: "",
    isValid: false,
    validityDetails: {
      isValidLength: false,
      isValidCharacters: false,
      hasNoSpaces: false,
    },
  });

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
  const [isUniqueEmail, setIsUniqueEmail] = useState<boolean>(false);

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

  const usernameChangeHandler = (event: any) => {
    const username = event.target.value;

    const usernameStatus = checkUsername(username);

    setUsername({
      value: username,
      isValid: usernameStatus.isValid,
      validityDetails: {
        isValidLength: usernameStatus.validityDetails.isValidLength,
        isValidCharacters: usernameStatus.validityDetails.isValidCharacters,
        hasNoSpaces: usernameStatus.validityDetails.hasNoSpaces,
      },
    });
  };

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

    const isValidForm =
      username.isValid && email.isValid && password.isValid && isUniqueEmail;
    let user;

    if (isValidForm) {
      user = {
        username: username.value,
        email: email.value,
        password: password.value,
      };

      try {
        const response = await createUser(user);
        const statusCode = response?.status ?? null;

        if (statusCode === 200) {
          navigate(`${ROUTES.SIGN_IN}?newUser=true`);
        }
      } catch (error: any) {
        if (error.response.status === 409) {
          setAlert({
            type: "error",
            message: "Email already exists! Please use a different email.",
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
    const checkEmailUniqueness = async () => {
      const response = await getUserByEmail(email.value);
      const user = (await response?.data[0]) ?? null;

      if (_.isEmpty(user)) {
        setIsUniqueEmail(true);
      }

      if (!_.isEmpty(user)) {
        setIsUniqueEmail(false);
      }
    };

    if (email.isValid) {
      checkEmailUniqueness();
    }
  }, [email.isValid]);

  return (
    <SignUpFormSC onSubmit={formHandler}>
      <TitleSC variant="h1">Sign Up</TitleSC>
      <AlertContainerSC>
        {alertVisible && (
          <Alert alertVisible setAlertVisible={setAlertVisible} type={alert.type}>
            {alert.message}
          </Alert>
        )}
      </AlertContainerSC>
      <UsernameInput username={username} onChange={usernameChangeHandler} />
      <EmailInput
        email={email}
        onChange={emailChangeHandler}
        checkUniqueness={true}
        isUnique={isUniqueEmail}
      />
      <PasswordInput password={password} onChange={passwordChangeHandler} />
      <SignUpButtonSC type="submit">Sign Up</SignUpButtonSC>
      <Divider />
      <SignUpWithGoogleButtonSC href={`${ROUTES.AUTH_GOOGLE}`}>
        <SocialLogoSC src={GoogleLogo} alt="social logo" />
        Sign Up with Google
      </SignUpWithGoogleButtonSC>
      {/* <SignUpWithFacebookButtonSC href={`${ROUTES.AUTH_FACEBOOK}`}>
        <SocialLogoSC src={FacebookLogo} alt="social logo" />
        Sign Up with Facebook
      </SignUpWithFacebookButtonSC> */}
      <SignInSC>
        Already a user?{" "}
        <SignInLinkSC href={`${ROUTES.SIGN_IN}`}>Sign In</SignInLinkSC>
      </SignInSC>
    </SignUpFormSC>
  );
};

export default SignUpForm;
