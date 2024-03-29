import { FC, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// component imports
import Alert from "../alert/alert.component";
import Button from "../button/button.component";
import PasswordInput from "../password-input/password-input.component";

// api imports
import { updatePassword } from "../../apis/users/users.api";

// props or interfaces imports
import UpdatePasswordFormProps from "./update-password-form.interface";
import PasswordInterface from "../../interfaces/password.interface";

// styling imports
import {
  AlertContainerSC,
  ButtonContainerSC,
  FormSC,
  PasswordInputContainerSC,
  TitleSC,
} from "./update-password-form.styles";

// constants or helper functions imports
import { ROUTES } from "../../utils/constants";
import { checkPassword, checkPasswordMatch } from "../../utils/helpers";

const UpdatePasswordForm: FC<UpdatePasswordFormProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: "info" | "success" | "error";
    message: string;
  }>({
    type: "info",
    message: "",
  });
  const [alertVisible, setAlertVisible] = useState<boolean>(false);
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
  const [confirmPassword, setConfirmPassword] = useState<PasswordInterface>({
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

  const handleConfirmPasswordChange = (event: any) => {
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

    setConfirmPassword({
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

  const handleFormSubmit = async () => {
    setIsLoading(true);

    // check the password then send to the server if it's valid
    if (password.isValid && confirmPassword.isValid) {
      // check if the passwords match
      const isMatch = checkPasswordMatch(password.value, confirmPassword.value);

      if (isMatch) {
        // send the password to the server
        try {
          const response = await updatePassword(email, password.value);

          if (response.status === 200) {
            // redirect to login page
            navigate(`${ROUTES.SIGN_IN}?updatedPassword=true`);
          }
        } catch (error: any) {
          // reset password code is not yet verified - status code is 400
          if (error.response.status === 400) {
            setAlert({
              type: "error",
              message: error.response.data.message,
            });
            setAlertVisible(true);
          }

          // email not found - status code is 404
          if (error.response.status === 404) {
            setAlert({
              type: "error",
              message: error.response.data.message,
            });
            setAlertVisible(true);
          }

          // status code is 500
          if (error.response.status === 500) {
            setAlert({
              type: "error",
              message: "Something went wrong. Please try again.",
            });
            setAlertVisible(true);
          }
        }
      }

      // passwords don't match
      if (!isMatch) {
        setAlert({
          type: "error",
          message: "Passwords don't match.",
        });
        setAlertVisible(true);
      }
    }

    setIsLoading(false);
  };

  return (
    <FormSC>
      <TitleSC variant="h1">Enter New Password</TitleSC>
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
      <PasswordInputContainerSC>
        <PasswordInput
          password={password}
          onChange={handlePasswordChange}
          isRequired
        />
        <PasswordInput
          label="Confirm Password"
          password={confirmPassword}
          onChange={handleConfirmPasswordChange}
          showTooltip={false}
          isRequired
        />
      </PasswordInputContainerSC>

      <ButtonContainerSC>
        <Button
          onClick={handleFormSubmit}
          isLoading={isLoading}
          width="full"
          disabled={isLoading}
        >
          {isLoading ? "Updating Password" : "Update Password"}
        </Button>
      </ButtonContainerSC>
    </FormSC>
  );
};

export default UpdatePasswordForm;
