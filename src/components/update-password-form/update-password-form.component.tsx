import { FC, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Alert from '../alert/alert.component';
import Button from '../button/index.component';
import PasswordInput from '../password-input/password-input.component';
import UpdatePasswordFormI from './update-password-form.interface';
import { AlertContainerSC, ButtonContainerSC, FormSC, TitleSC } from './update-password-form.styles';
import { updatePassword } from '../../apis/users/users.api';
import COLORS from '../../styles/colors';
import { ROUTES } from '../../utils/constants';
import PasswordInterface from '../../interfaces/password.interface';
import { checkPassword, checkPasswordMatch } from '../../utils/helpers';

const UpdatePasswordForm: FC<UpdatePasswordFormI> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
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

  const confirmPasswordChangeHandler = (event: any) => {
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


  const formHandler = async () => {
    setIsButtonLoading(true);

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

    setIsButtonLoading(false);
  }
  
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
      <PasswordInput password={password} onChange={passwordChangeHandler} showTooltip={false} />
      <PasswordInput label='Confirm Password' password={confirmPassword} onChange={confirmPasswordChangeHandler} showTooltip={false} />
      <ButtonContainerSC>
      <Button
        labelColor={`${COLORS.NEUTRAL.N0}`}
        backgroundColor={`${COLORS.PRIMARY.P500}`}
        label="Update Password"
        styleType="default"
        actionType='button'
        clickHandler={formHandler}
        isLoading={isButtonLoading}
      />
      </ButtonContainerSC>
    </FormSC>
  );
};

export default UpdatePasswordForm;