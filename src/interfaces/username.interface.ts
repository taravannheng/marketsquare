interface UsernameInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidLength: boolean;
    isValidCharacters: boolean;
    hasNoSpaces: boolean;
  };
}

export default UsernameInterface;