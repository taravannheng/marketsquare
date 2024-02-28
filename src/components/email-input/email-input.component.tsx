import { FC, useState } from "react";

// 3rd-party dependencies imports
import { Cancel, CheckCircle } from "@mui/icons-material";

// props or interfaces imports
import EmailInputProps from "./email-input.interface";

// styling imports
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
  const showStatusIcon = hasBeenFocused && value.length > 0;
  const isInvalid = !isValid && hasBeenFocused && !isFocus && value.length > 0;
  const isInvalidFormat = isFocus && showTooltip && !isValid && hasBeenFocused && value.length > 0;
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
        {showStatusIcon && (
          <StatusIconSC sx={{ opacity: `${!isFocus ? "1" : "0"}` }}>
            {!isValid ? (
              <Cancel sx={{ color: `${COLORS.RED.R500}` }} />
            ) : (
              <CheckCircle sx={{ color: `${COLORS.GREEN.G400}` }} />
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
      {isInvalid && <StatusTextSC>{errorMessage}</StatusTextSC>}
      {isInvalidFormat && (
        <TooltipSC>
          <TooltipTextSC>
            {tooltipMessage}
          </TooltipTextSC>
        </TooltipSC>
      )}
    </EmailInputSC>
  );
};

export default EmailInput;
