import { FC, useState } from "react";

// component imports
import ProgressIndicator from "../progress-indicator/progress-indicator.component";

// interface imports 
import ButtonProps from "./button.interface";

// styling imports
import {
  IconSC,
  PrimaryButtonSC,
  ProgressIndicatorContainerSC,
  SecondaryButtonSC,
  TertiaryButtonSC,
} from "./button.styles";
import { space, borderRadius } from "../../styles/styles";

const Button: FC<ButtonProps> = ({
  actionType = "button",
  styleType = "primary",
  children,
  onClick,
  disabled = false,
  icon,
  iconPosition = "left",
  isLoading,
  width = "auto",
  href,
  underlineLabel = false,
  rounded = false,
}) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const buttonWidth =
    width === "auto" ? "fit-content !important" : `100% !important`;

  return (
    <>
      {styleType === "primary" && (
        <PrimaryButtonSC
          type={actionType}
          onClick={onClick}
          href={href}
          disabled={disabled}
          sx={{
            width: buttonWidth,
            borderRadius: `${
              rounded ? `${borderRadius.rounded}` : `${borderRadius.s}`
            }`,
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          disableRipple
        >
          {icon && iconPosition === "left" && <IconSC>{icon}</IconSC>}
          {children}
          {isLoading && (
            <ProgressIndicatorContainerSC sx={{ marginLeft: `${space.m}` }}>
              <ProgressIndicator color="secondary" size={16} />
            </ProgressIndicatorContainerSC>
          )}
          {icon && iconPosition === "right" && <IconSC>{icon}</IconSC>}
        </PrimaryButtonSC>
      )}
      {styleType === "secondary" && (
        <SecondaryButtonSC
          type={actionType}
          onClick={onClick}
          href={href}
          disabled={disabled}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            width: buttonWidth,
            borderRadius: `${
              rounded ? `${borderRadius.rounded}` : `${borderRadius.s}`
            }`,
          }}
          disableRipple
        >
          {icon && iconPosition === "left" && <IconSC>{icon}</IconSC>}
          {children}
          {isLoading && (
            <ProgressIndicatorContainerSC sx={{ marginLeft: `${space.m}` }}>
              <ProgressIndicator
                color={`${isHovered ? "secondary" : "primary"}`}
                size={16}
              />
            </ProgressIndicatorContainerSC>
          )}
          {icon && iconPosition === "right" && <IconSC>{icon}</IconSC>}
        </SecondaryButtonSC>
      )}
      {styleType === "tertiary" && (
        <TertiaryButtonSC
          type={actionType}
          onClick={onClick}
          href={href}
          disabled={disabled}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          sx={{
            width: buttonWidth,
            textDecoration: `${underlineLabel ? "underline" : "none"}`,
          }}
          disableRipple
        >
          {icon && iconPosition === "left" && <IconSC>{icon}</IconSC>}
          {children}
          {isLoading && (
            <ProgressIndicatorContainerSC sx={{ marginLeft: `${space.m}` }}>
              <ProgressIndicator color="primary" size={16} />
            </ProgressIndicatorContainerSC>
          )}
          {icon && iconPosition === "right" && <IconSC>{icon}</IconSC>}
        </TertiaryButtonSC>
      )}
    </>
  );
};

export default Button;
