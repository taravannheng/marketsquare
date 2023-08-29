import { FC, useState } from "react";
import { Cancel, CheckCircle } from "@mui/icons-material";

import EmailInputProps from "./email-input.interface";
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
import COLORS from "../../styles/colors";

const EmailInput: FC<EmailInputProps> = ({
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
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const isInvalid = !isValid && hasBeenFocused && !isFocus;
  const isInvalidFormat = !isFocus && showTooltip && !isValid && hasBeenFocused;
  const errorMessage = 'Please enter a valid email!';
  const tooltipMessage = 'Email should have the following format: username@example.com';

  const focusHandler = () => {
    if (!hasBeenFocused) {
      setHasBeenFocused(true);
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
        {hasBeenFocused && (
          <StatusIconSC sx={{ opacity: `${!isFocus ? "1" : "0"}` }}>
            {!isValid ? (
              <Cancel sx={{ color: `${COLORS.RED.R500}` }} />
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
      {isInvalidFormat && (
        <TooltipSC>
          <TooltipTextSC>
            {tooltipMessage}
          </TooltipTextSC>
        </TooltipSC>
      )}
      {isInvalid && <StatusTextSC>{errorMessage}</StatusTextSC>}
    </EmailInputSC>
  );
};

export default EmailInput;
