import React, { FC, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@mui/material";
import _ from "lodash";

import ProfileFormProps, {
  ChangePasswordButtonProps,
} from "./profile-form.interface";
import {
  AlertContainerSC,
  ChangePasswordButtonContainerSC,
  PasswordContainerSC,
  ProfileFormSC,
} from "./profile-form.styles";

import Alert from "../alert/alert.component";
import UsernameInput from "../username-input/username-input.component";
import PasswordInput from "../password-input/password-input.component";
import EmailInput from "../email-input/email-input.component";
import Button from "../button/button.component";
import { selectUser } from "../../store/user/user.selector";
import UsernameInterface from "../../interfaces/username.interface";
import EmailInterface from "../../interfaces/email.interface";
import PasswordInterface from "../../interfaces/password.interface";
import { checkEmail, checkUsername } from "../../utils/helpers";
import { space } from "../../styles/styles";
import {
  getUserByEmail,
  updateUsername,
  updateEmail,
} from "../../apis/users/users.api";
import USER_ACTION_TYPES from "../../store/user/user.types";
import { ROUTES } from "../../utils/constants";

const ChangePasswordButton: FC<ChangePasswordButtonProps> = () => {
  return (
    <Button
      styleType="tertiary"
      actionType="button"
      width="auto"
      href={ROUTES.RESET_PASSWORD_REQUEST}
      underlineLabel
    >
      Change Password
    </Button>
  );
};

const ProfileForm: FC<ProfileFormProps> = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: "info" | "success" | "error";
    message: string;
  }>({
    type: "error",
    message: "",
  });
  const [alertVisible, setAlertVisible] = useState<boolean>(false);

  const [username, setUsername] = useState<UsernameInterface>({
    value: user.username || "N/A",
    isValid: true,
    validityDetails: {
      isValidLength: true,
      isValidCharacters: true,
    },
  });

  const [email, setEmail] = useState<EmailInterface>({
    value: user.email || "N/A",
    isValid: true,
    validityDetails: {
      isValidUsername: true,
      isValidDomain: true,
      isUnique: true,
      hasAt: true,
    },
  });
  const [isUniqueEmail, setIsUniqueEmail] = useState<boolean>(true);

  const [password, setPassword] = useState<PasswordInterface>({
    value: "******",
    isValid: true,
    validityDetails: {
      isValidLength: true,
      hasUppercaseLetter: true,
      hasLowercaseLetter: true,
      hasNumber: true,
      hasSpecialCharacter: true,
      hasNoSpaces: true,
    },
  });

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

  useEffect(() => {
    if (user.provider !== "local") {
      const provider = _.capitalize(user.provider);

      setAlert({
        type: "error",
        message: `You are signed in using ${provider}. Please update your profile through ${provider}!`,
      });
      setAlertVisible(true);
    }
  }, []);

  // HANDLER FUNCTIONS
  const formHandler = async (event: any) => {
    event.preventDefault();

    const isValidForm = username.isValid && email.isValid;

    if (isValidForm) {
      const usernameHasChanged = username.value !== user.username;

      if (usernameHasChanged) {
        setIsLoading(true);

        try {
          const response = await updateUsername(user.email, username.value);
          const statusCode = response?.status ?? null;

          if (statusCode === 200) {
            setAlert({
              type: "success",
              message: "Profile updated successfully",
            });

            setAlertVisible(true);

            setIsLoading(false);
          }
        } catch (error: any) {
          setIsLoading(false);

          console.error(error);

          setAlert({
            type: "error",
            message: "An error has occured! Please try again later.",
          });
          setAlertVisible(true);
        }
      }

      const emailHasChanged = email.value !== user.email;

      if (emailHasChanged) {
        setIsLoading(true);

        try {
          const response = await updateEmail(user.email, email.value);
          const statusCode = response?.status ?? null;

          if (statusCode === 200) {
            setAlert({
              type: "success",
              message: "Profile updated successfully",
            });

            setAlertVisible(true);

            setIsLoading(false);
          }
        } catch (error: any) {
          setIsLoading(false);

          console.error(error);

          setAlert({
            type: "error",
            message: "An error has occured! Please try again later.",
          });
          setAlertVisible(true);
        }
      }

      // update state for both email and username
      dispatch({
        type: USER_ACTION_TYPES.SET_USER,
        payload: {
          ...user,
          email: email.value,
          username: username.value,
        },
      });
    }
  };

  const usernameChangeHandler = (event: any) => {
    const username = event.target.value;

    const usernameStatus = checkUsername(username);

    setUsername({
      value: username,
      isValid: usernameStatus.isValid,
      validityDetails: {
        isValidLength: usernameStatus.validityDetails.isValidLength,
        isValidCharacters: usernameStatus.validityDetails.isValidCharacters,
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

  return (
    <ProfileFormSC onSubmit={formHandler}>
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
      <UsernameInput
        username={username}
        onChange={usernameChangeHandler}
        disabled={user.provider !== "local"}
      />
      <EmailInput
        email={email}
        onChange={emailChangeHandler}
        checkUniqueness={true}
        isUnique={isUniqueEmail}
        disabled={user.provider !== "local"}
      />
      <PasswordContainerSC>
        <PasswordInput password={password} disabled showIcon={false} />
        {user.provider === "local" && (
          <ChangePasswordButtonContainerSC>
            <ChangePasswordButton />
          </ChangePasswordButtonContainerSC>
        )}
      </PasswordContainerSC>
      <Box sx={{ marginTop: `${space.xl}`, marginBottom: `${space.l}` }}>
        <Button
          actionType="submit"
          width="full"
          isLoading={isLoading}
          disabled={isLoading || user.provider !== 'local'}
        >
          {isLoading ? "Updating Profile" : "Update Profile"}
        </Button>
      </Box>
    </ProfileFormSC>
  );
};

export default ProfileForm;
