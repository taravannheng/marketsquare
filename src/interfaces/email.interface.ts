interface EmailInterface {
  value: string;
  isValid: boolean;
  validityDetails: {
    isValidUsername: boolean;
    isValidDomain: boolean;
    isUnique?: boolean;
    hasAt: boolean;
  };
}

export default EmailInterface;