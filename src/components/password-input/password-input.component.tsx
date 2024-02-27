import { FC, useState } from "react";
import {
  Cancel,
  CheckCircle,
  CheckCircleOutline,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";

import { PasswordInputProps } from "./password-input.interface";
import {
  InputSC,
  LabelContainerSC,
  LabelSC,
  StatusIconSC,
  TooltipListSC,
  TooltipSC,
  TooltipTextSC,
  PasswordInputSC,
  TooltipItemSC,
  TooltipItemIconSC,
  TooltipItemTextSC,
  StatusTextSC,
  InputContainerSC,
  ShowPasswordIconSC,
} from "./password-input.style";
import COLORS from "../../styles/colors";

const PasswordInput: FC<PasswordInputProps> = ({
  disabled = false,
  id,
  label = "Password",
  name = "password",
  onChange,
  placeholder = "",
  password,
  isRequired = true,
  showTooltip = true,
  showIcon = true,
}) => {
  const { value, isValid, validityDetails } = password;
  const [hasBeenFocused, setHasBeenFocused] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // ---

  const showStatusIcon = hasBeenFocused && value.length > 0;
  const isInvalid = !isValid && hasBeenFocused && !isFocus && value.length > 0;
  const isInvalidFormat = isFocus && showTooltip && !isValid && hasBeenFocused && value.length > 0;
  const errorMessage = 'Please enter a valid email!';
  const tooltipMessage = 'Email should have the following format: username@example.com';

  // ---

  const focusHandler = () => {
    if (!hasBeenFocused) {
      setHasBeenFocused(true);
    }

    setIsFocus(true);
  };

  const blurHandler = () => {
    setIsFocus(false);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <PasswordInputSC>
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
      <InputContainerSC>
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
          type={showPassword ? "text" : "password"}
          required={isRequired}
        />
        {showIcon && (
          <ShowPasswordIconSC>
          {showPassword ? (
            <Visibility
              sx={{ color: `${COLORS.NEUTRAL.N300}`, cursor: "pointer" }}
              onClick={showPasswordHandler}
            />
          ) : (
            <VisibilityOff
              sx={{ color: `${COLORS.NEUTRAL.N300}`, cursor: "pointer" }}
              onClick={showPasswordHandler}
            />
          )}
        </ShowPasswordIconSC>
        )}
        
      </InputContainerSC>
      {isInvalid && (
        <StatusTextSC>Please enter a valid password!</StatusTextSC>
      )}
      {isInvalidFormat && (
        <TooltipSC>
          <TooltipTextSC>Password should include:</TooltipTextSC>
          <TooltipListSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${COLORS.GREEN.G400} !important`,
                    opacity: `${
                      validityDetails.hasUppercaseLetter ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${COLORS.NEUTRAL.N300} !important`,
                    opacity: `${
                      validityDetails.hasUppercaseLetter ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.hasUppercaseLetter
                      ? `${COLORS.NEUTRAL.N900}`
                      : `${COLORS.NEUTRAL.N500}`
                  } !important`,
                }}
              >
                At least one uppercase letter
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${COLORS.GREEN.G400} !important`,
                    opacity: `${
                      validityDetails.hasLowercaseLetter ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${COLORS.NEUTRAL.N300} !important`,
                    opacity: `${
                      validityDetails.hasLowercaseLetter ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.hasLowercaseLetter
                      ? `${COLORS.NEUTRAL.N900}`
                      : `${COLORS.NEUTRAL.N500}`
                  } !important`,
                }}
              >
                At least one lowercase letter
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${COLORS.GREEN.G400} !important`,
                    opacity: `${
                      validityDetails.hasNumber ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${COLORS.NEUTRAL.N300} !important`,
                    opacity: `${
                      validityDetails.hasNumber ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.hasNumber
                      ? `${COLORS.NEUTRAL.N900}`
                      : `${COLORS.NEUTRAL.N500}`
                  } !important`,
                }}
              >
                At least one number
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${COLORS.GREEN.G400} !important`,
                    opacity: `${
                      validityDetails.hasSpecialCharacter ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${COLORS.NEUTRAL.N300} !important`,
                    opacity: `${
                      validityDetails.hasSpecialCharacter ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.hasSpecialCharacter
                      ? `${COLORS.NEUTRAL.N900}`
                      : `${COLORS.NEUTRAL.N500}`
                  } !important`,
                }}
              >
                At least one special character
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${COLORS.GREEN.G400} !important`,
                    opacity: `${
                      validityDetails.hasNoSpaces ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${COLORS.NEUTRAL.N300} !important`,
                    opacity: `${
                      validityDetails.hasNoSpaces ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.hasNoSpaces
                      ? `${COLORS.NEUTRAL.N900}`
                      : `${COLORS.NEUTRAL.N500}`
                  } !important`,
                }}
              >
                No spaces allowed
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${COLORS.GREEN.G400} !important`,
                    opacity: `${
                      validityDetails.isValidLength ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${COLORS.NEUTRAL.N300} !important`,
                    opacity: `${
                      validityDetails.isValidLength ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.isValidLength
                      ? `${COLORS.NEUTRAL.N900}`
                      : `${COLORS.NEUTRAL.N500}`
                  } !important`,
                }}
              >
                Length between 8 to 16 characters
              </TooltipItemTextSC>
            </TooltipItemSC>
          </TooltipListSC>
        </TooltipSC>
      )}
    </PasswordInputSC>
  );
};

export default PasswordInput;
