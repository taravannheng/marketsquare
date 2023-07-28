interface PasswordInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidLength: boolean;
    hasUppercaseLetter: boolean;
    hasLowercaseLetter: boolean;
    hasNumber: boolean;
    hasSpecialCharacter: boolean;
    hasNoSpaces: boolean;
  };
}

export default PasswordInterface;