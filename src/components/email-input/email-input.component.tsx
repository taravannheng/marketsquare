import { FC, useState } from "react";
import { Cancel, CheckCircle, CheckCircleOutline } from "@mui/icons-material";

import EmailInputInterface from "./email-input.interface";
import {
  InputSC,
  LabelContainerSC,
  LabelSC,
  StatusIconSC,
  EmailInputSC,
  StatusTextSC,
  TooltipSC,
  TooltipTextSC,
} from "./email-input.style";
import colors from "../../styles/colors";

const EmailInput: FC<EmailInputInterface> = ({
  disabled = false,
  label = "Email",
  name = "email",
  onChange,
  placeholder = "",
  email,
  id,
  isRequired = true,
  showTooltip = true,
}) => {
  const { value, isValid } = email;
  const [isInitialFocus, setIsInitialFocus] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const focusHandler = () => {
    if (!isInitialFocus) {
      setIsInitialFocus(true);
    }

    setIsFocus(true);
  };

  const blurHandler = () => {
    setIsFocus(false);
  };

  return (
    <EmailInputSC>
      <LabelContainerSC>
        <LabelSC>{label}</LabelSC>
        {isInitialFocus && (
          <StatusIconSC sx={{ opacity: `${!isFocus ? "1" : "0"}` }}>
            {!isValid ? (
              <Cancel sx={{ color: `${colors.red}` }} />
            ) : (
              <CheckCircle sx={{ color: `${colors.green}` }} />
            )}
          </StatusIconSC>
        )}
      </LabelContainerSC>
      <InputSC
        hiddenLabel
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        onFocus={focusHandler}
        onBlur={blurHandler}
        placeholder={placeholder}
        value={value}
        type="email"
        required={isRequired}
      />
      {!isFocus && showTooltip && !isValid && (
        <TooltipSC>
          <TooltipTextSC>Email should have the following format: email@example.com</TooltipTextSC>
        </TooltipSC>
      )}
      {!isValid && isInitialFocus && !isFocus && (
        <StatusTextSC>Please enter a valid email!</StatusTextSC>
      )}
    </EmailInputSC>
  );
};

export default EmailInput;
