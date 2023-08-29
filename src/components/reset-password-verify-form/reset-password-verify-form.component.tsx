import { FC, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Alert from '../alert/alert.component';
import FourDigitInput from '../four-digit-input/four-digit-input.component';
import ResetPasswordVerifyFormI from './reset-password-verify-form.interface';
import { AlertContainerSC, ButtonContainerSC, FormSC, TitleSC } from './reset-password-verify-form.styles';
import { verifyPasswordReset } from '../../apis/passwords/password.api';
import Button from '../button/index.component';
import COLORS from '../../styles/colors';
import { checkFourDigits } from '../../utils/helpers';
import { ROUTES } from '../../utils/constants';

const ResetPasswordVerifyForm: FC<ResetPasswordVerifyFormI> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const email = params.get("email");
  const [fourDigits, setFourDigits] = useState(['', '', '', '']);
  const refs = [useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null), useRef<HTMLInputElement>(null)];
  const [isButtonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [alert, setAlert] = useState<{
    type: "info" | "success" | "error";
    message: string;
  }>({
    type: "info",
    message: "Please enter the 4-digit code to continue.",
  });
  const [alertVisible, setAlertVisible] = useState<boolean>(true);

  const formHandler = async () => {
    setIsButtonLoading(true);

    // convert the four digits to number
    const fourDigitsAsNumber = fourDigits.map((digit) => Number(digit));

    // send the code to the server
    const isValidFourDigits = checkFourDigits(fourDigitsAsNumber);

    if (isValidFourDigits) {
      // send the code to the server
      try {
        const response = await verifyPasswordReset(email, fourDigits.join(''));

        if (response.status === 200) {
          // redirect to update password page
          navigate(`${ROUTES.RESET_PASSWORD_UPDATE}?email=${email}`);
        }
      } catch (error: any) {
        // email not found - status code is 404
        if (error.response.status === 404) {
          setAlert({
            type: "error",
            message: "Email not found.",
          });
          setAlertVisible(true);
        }

        // code is incorrect - status code is 400
        if (error.response.status === 400) {
          console.log(error.response.data.message);
          setAlert({
            type: "error",
            message: `${error.response.data.message}`,
          });
          setAlertVisible(true);
        }

        // status code is 500
        if (error.response.status === 500) {
          setAlert({
            type: "error",
            message: "Something went wrong. Please try again later.",
          });
          setAlertVisible(true);
        }
      }
    }

    if (!isValidFourDigits) {
      setAlert({
        type: "error",
        message: "Please enter a valid 4-digit code.",
      });
      setAlertVisible(true);
    }

    setIsButtonLoading(false);
  }

  const digitChangeHandler = (index: number, value: string) => {
    setFourDigits((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });

    if (value.length === 1 && index < 3) {
      const nextInput = refs[index + 1].current;
      if (nextInput) {
        nextInput.focus();
      }
    }

    if (value.length === 1 && index === 3) {
      const lastInput = refs[index].current;

      if (lastInput) {
        lastInput.blur();
      }
    }
  };
  
  return (
    <FormSC>
      <TitleSC variant="h1">Enter Code</TitleSC>
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
      <FourDigitInput values={fourDigits} onChange={digitChangeHandler} refs={refs} />
      <ButtonContainerSC>
      <Button
        labelColor={`${colors.lightest}`}
        backgroundColor={`${colors.primary}`}
        label="Submit Code"
        styleType="default"
        actionType='button'
        clickHandler={formHandler}
        isLoading={isButtonLoading}
      />
      </ButtonContainerSC>
    </FormSC>
  );
};

export default ResetPasswordVerifyForm;