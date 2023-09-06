import { FC, useState } from "react";
import { Cancel, CheckCircle } from "@mui/icons-material";

import UsernameInputInterface from "./username-input.interface";
import {
  InputSC,
  LabelContainerSC,
  LabelSC,
  StatusIconSC,
  UsernameInputSC,
  StatusTextSC,
  TooltipSC,
  TooltipTextSC,
} from "./username-input.style";
import COLORS from "../../styles/colors";

const UsernameInput: FC<UsernameInputInterface> = ({
  disabled = false,
  id,
  label = "Username",
  name = "username",
  onChange,
  placeholder = "",
  username,
  isRequired = true,
  showTooltip = true,
}) => {
  const { value, isValid, validityDetails } = username;
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const showStatusIcon = hasBeenFocused && value.length > 0;
  const isInvalid = !isValid && hasBeenFocused && !isFocus && value.length > 0;
  const isInvalidFormat = isFocus && showTooltip && !isValid && hasBeenFocused && value.length > 0;
  const errorMessage = "Please enter a valid username!";
  const tooltipMessage =
    "Username must be 4-20 characters and include only letters, numbers, or underscores.";

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
    <UsernameInputSC>
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
        type="text"
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
    </UsernameInputSC>
  );
};

export default UsernameInput;
