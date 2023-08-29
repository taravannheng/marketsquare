import { FC, useState } from 'react';

import EmailInput from '../email-input/email-input.component';
import Alert from '../alert/alert.component';
import ProgressIndicator from '../progress-indicator/index.component';
import ResetPasswordRequestFormI from './reset-password-request-form.interface';
import EmailInterface from '../../interfaces/email.interface';
import { checkEmail } from '../../utils/helpers';
import { AlertContainerSC, ButtonContainerSC, FormSC, TitleSC } from './reset-password-request-form.styles';
import { requestPasswordReset } from '../../apis/passwords/password.api';
import Button from '../button/index.component';
import COLORS from '../../styles/colors';

const ResetPasswordRequestForm: FC<ResetPasswordRequestFormI> = () => {
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: "info" | "success" | "error";
    message: string;
  }>({
    type: "info",
    message: "Please enter your email address to get a 4-digit code to reset your password.",
  });
  const [alertVisible, setAlertVisible] = useState<boolean>(true);

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

  const formHandler = async (event: any) => {
    event.preventDefault();

    setIsButtonLoading(true);

    // if the email is valid, send the request to the server
    if (email.isValid) {
      try {
        const response = await requestPasswordReset(email.value);

        if (response.status === 200) {
          // redirect to verify code page
          setAlert({
            type: "success",
            message: "A 4-digit code has been sent to your email address.",
          });
          setAlertVisible(true);
        }
      } catch (error: any) {
        // if status code is 404
        if (error.response.status === 404) {
          setAlert({
            type: "error",
            message: "User not found! Please enter a different email.",
          });
          setAlertVisible(true);
        }

        // if status code is 500
        if (error.response.status === 500) {
          setAlert({
            type: "error",
            message: "An error occurred. Please try again.",
          });
          setAlertVisible(true);
        }
      }
    }

    setIsButtonLoading(false);
  }
  
  return (
    <FormSC onSubmit={formHandler}>
      <TitleSC variant="h1">Forgotten Password?</TitleSC>
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
      <EmailInput email={email} onChange={emailChangeHandler} />
      <ButtonContainerSC>
      <Button
        labelColor={`${colors.lightest}`}
        backgroundColor={`${colors.primary}`}
        label="Send Code"
        styleType="default"
        actionType='submit'
        isLoading={isButtonLoading}
      />
      </ButtonContainerSC>
    </FormSC>
  );
};

export default ResetPasswordRequestForm;