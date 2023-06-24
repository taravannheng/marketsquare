import { FC, useState } from "react";
import { Cancel, CheckCircle, CheckCircleOutline } from "@mui/icons-material";

import UsernameInputInterface from "./username-input.interface";
import {
  InputSC,
  LabelContainerSC,
  LabelSC,
  StatusIconSC,
  TooltipListSC,
  TooltipSC,
  TooltipTextSC,
  UsernameInputSC,
  TooltipItemSC,
  TooltipItemIconSC,
  TooltipItemTextSC,
  StatusTextSC,
} from "./username-input.style";
import colors from "../../styles/colors";

const UsernameInput: FC<UsernameInputInterface> = ({
  disabled = false,
  id,
  label = "Username",
  name = "username",
  onChange,
  placeholder = "Enter your username",
  username,
}) => {
  const { value, isValid, validityDetails } = username;
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
    <UsernameInputSC>
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
        type="text"
      />
      {isFocus && (
        <TooltipSC>
          <TooltipTextSC>Username should be:</TooltipTextSC>
          <TooltipListSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${colors.green} !important`,
                    opacity: `${
                      validityDetails.isValidLength ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${colors.grey} !important`,
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
                      ? `${colors.darkest}`
                      : `${colors.dark}`
                  } !important`,
                }}
              >
                Length between 4 to 20 characters
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${colors.green} !important`,
                    opacity: `${
                      validityDetails.isValidCharacters ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${colors.grey} !important`,
                    opacity: `${
                      validityDetails.isValidCharacters ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                sx={{
                  color: `${
                    validityDetails.isValidCharacters
                      ? `${colors.darkest}`
                      : `${colors.dark}`
                  } !important`,
                }}
              >
                Letters, numbers and underscore only
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${colors.green} !important`,
                    opacity: `${
                      validityDetails.hasNoSpaces ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${colors.grey} !important`,
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
                      ? `${colors.darkest}`
                      : `${colors.dark}`
                  } !important`,
                }}
              >
                No spaces allowed
              </TooltipItemTextSC>
            </TooltipItemSC>
          </TooltipListSC>
        </TooltipSC>
      )}
      {!isValid && isInitialFocus && !isFocus && (
        <StatusTextSC>Please enter a valid username!</StatusTextSC>
      )}
    </UsernameInputSC>
  );
};

export default UsernameInput;
