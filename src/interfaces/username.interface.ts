interface UsernameInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidLength: boolean;
    isValidCharacters: boolean;
  };
}

export default UsernameInterface;