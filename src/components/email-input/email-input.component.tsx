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
  TooltipListSC,
  TooltipItemSC,
  TooltipItemIconSC,
  TooltipItemTextSC,
  TooltipItemTextExampleSC,
  ExampleBoldSC,
} from "./email-input.style";
import colors from "../../styles/colors";

const EmailInput: FC<EmailInputInterface> = ({
  disabled = false,
  label = "Email",
  name = "email",
  onChange,
  placeholder = "example@gmail.com",
  email,
  id,
}) => {
  const { value, isValid, validityDetails } = email;
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
      />
      {isFocus && (
        <TooltipSC>
          <TooltipTextSC>Email should include:</TooltipTextSC>
          <TooltipListSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${colors.green} !important`,
                    opacity: `${
                      validityDetails.isValidUsername ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${colors.grey} !important`,
                    opacity: `${
                      validityDetails.isValidUsername ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                variant="subtitle2"
                sx={{
                  color: `${
                    validityDetails.isValidUsername
                      ? `${colors.darkest}`
                      : `${colors.dark}`
                  } !important`,
                }}
              >
                Username{" "}
                <TooltipItemTextExampleSC
                  sx={{
                    color: `${
                      validityDetails.isValidUsername
                        ? `${colors.darkest}`
                        : `${colors.dark}`
                    } !important`,
                  }}
                  variant="body1"
                >
                  e.g.{" "}
                  <ExampleBoldSC
                    sx={{
                      color: `${
                        validityDetails.isValidUsername
                          ? `${colors.darkest}`
                          : `${colors.dark}`
                      } !important`,
                    }}
                    variant="caption"
                  >
                    example
                  </ExampleBoldSC>
                  @gmail.com
                </TooltipItemTextExampleSC>
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${colors.green} !important`,
                    opacity: `${validityDetails.hasAt ? "1" : "0"} !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${colors.grey} !important`,
                    opacity: `${validityDetails.hasAt ? "0" : "1"} !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                variant="subtitle2"
                sx={{
                  color: `${
                    validityDetails.hasAt
                      ? `${colors.darkest}`
                      : `${colors.dark}`
                  } !important`,
                }}
              >
                @{" "}
                <TooltipItemTextExampleSC
                  sx={{
                    color: `${
                      validityDetails.isValidUsername
                        ? `${colors.darkest}`
                        : `${colors.dark}`
                    } !important`,
                  }}
                  variant="body1"
                >
                  e.g. example
                  <ExampleBoldSC
                    sx={{
                      color: `${
                        validityDetails.isValidUsername
                          ? `${colors.darkest}`
                          : `${colors.dark}`
                      } !important`,
                    }}
                    variant="caption"
                  >
                    @
                  </ExampleBoldSC>
                  gmail.com
                </TooltipItemTextExampleSC>
              </TooltipItemTextSC>
            </TooltipItemSC>
            <TooltipItemSC>
              <TooltipItemIconSC>
                <CheckCircle
                  sx={{
                    color: `${colors.green} !important`,
                    opacity: `${
                      validityDetails.isValidDomain ? "1" : "0"
                    } !important`,
                  }}
                />
                <CheckCircleOutline
                  sx={{
                    color: `${colors.grey} !important`,
                    opacity: `${
                      validityDetails.isValidDomain ? "0" : "1"
                    } !important`,
                  }}
                />
              </TooltipItemIconSC>
              <TooltipItemTextSC
                variant="subtitle2"
                sx={{
                  color: `${
                    validityDetails.isValidDomain
                      ? `${colors.darkest}`
                      : `${colors.dark}`
                  } !important`,
                }}
              >
                Domain{" "}
                <TooltipItemTextExampleSC
                  sx={{
                    color: `${
                      validityDetails.isValidUsername
                        ? `${colors.darkest}`
                        : `${colors.dark}`
                    } !important`,
                  }}
                  variant="body1"
                >
                  e.g. example@
                  <ExampleBoldSC
                    sx={{
                      color: `${
                        validityDetails.isValidUsername
                          ? `${colors.darkest}`
                          : `${colors.dark}`
                      } !important`,
                    }}
                    variant="caption"
                  >
                    gmail.com
                  </ExampleBoldSC>
                </TooltipItemTextExampleSC>
              </TooltipItemTextSC>
            </TooltipItemSC>
          </TooltipListSC>
        </TooltipSC>
      )}
      {!isValid && isInitialFocus && !isFocus && (
        <StatusTextSC>Please enter a valid email!</StatusTextSC>
      )}
    </EmailInputSC>
  );
};

export default EmailInput;
