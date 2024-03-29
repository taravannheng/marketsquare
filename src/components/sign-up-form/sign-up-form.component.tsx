import { FC, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// 3rd-party dependencies imports
import _ from "lodash";
import { Box } from "@mui/material";

// component imports
import UsernameInput from "../username-input/username-input.component";
import PasswordInput from "../password-input/password-input.component";
import EmailInput from "../email-input/email-input.component";
import Divider from "../divider/divider.component";
import Alert from "../alert/alert.component";
import Button from "../button/button.component";

// api imports
import { createUser, getUserByEmail } from "../../apis/users/users.api";

// props or interfaces imports
import SignUpFormProps from "./sign-up-form.interface";
import UsernameInterface from "../../interfaces/username.interface";
import EmailInterface from "../../interfaces/email.interface";
import PasswordInterface from "../../interfaces/password.interface";

// styling imports
import {
  AlertContainerSC,
  InputContainerSC,
  SignInSC,
  SignUpFormSC,
  SocialLogoSC,
  TitleSC,
} from "./sign-up-form.style";
import space from "../../styles/spacing";

// constants or helper functions imports
import { checkEmail, checkPassword, checkUsername } from "../../utils/helpers";
import { ROUTES } from "../../utils/constants";

// asset imports
import GoogleLogo from "../../assets/socials/social-google.png";

const SignUpForm: FC<SignUpFormProps> = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [username, setUsername] = useState<UsernameInterface>({
    value: "",
    isValid: false,
    validityDetails: {
      isValidLength: false,
      isValidCharacters: false,
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

  const handleUsernameChange = (event: any) => {
    const username = event.target.value;

    const usernameStatus = checkUsername(username);

    console.log(usernameStatus);

    setUsername({
      value: username,
      isValid: usernameStatus.isValid,
      validityDetails: {
        isValidLength: usernameStatus.validityDetails.isValidLength,
        isValidCharacters: usernameStatus.validityDetails.isValidCharacters,
      },
    });
  };

  const handleEmailChange = async (event: any) => {
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

  const handlePasswordChange = (event: any) => {
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

  const handleFormSubmit = async (event: any) => {
    event.preventDefault();

    setIsLoading(true);

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
          // change loading state
          setIsLoading(false);

          navigate(`${ROUTES.SIGN_IN}?newUser=true`);
        }
      } catch (error: any) {
        // change loading state
        setIsLoading(false);

        // display error message
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

    !isValidForm && setIsLoading(false);
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
    <SignUpFormSC onSubmit={handleFormSubmit}>
      <TitleSC variant="h1">Sign Up</TitleSC>
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
        <UsernameInput username={username} onChange={handleUsernameChange} />
        <EmailInput
          email={email}
          onChange={handleEmailChange}
          checkUniqueness={true}
          isUnique={isUniqueEmail}
        />
        <PasswordInput password={password} onChange={handlePasswordChange} />
      </InputContainerSC>
      <Box sx={{ marginTop: `${space.xl}`, marginBottom: `${space.l}` }}>
        <Button actionType="submit" width="full" isLoading={isLoading} disabled={isLoading}>
          {isLoading ? "Signing Up" : "Sign Up"}
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
          Sign Up with Google
        </Button>
      </Box>
      <SignInSC>
        Already a user?{" "}
        <Button styleType="tertiary" href={`${ROUTES.SIGN_IN}`} underlineLabel>
          Sign In
        </Button>
      </SignInSC>
    </SignUpFormSC>
  );
};

export default SignUpForm;
