import { FC, useEffect, useRef } from "react";

import { DigitInputSC, FourDigitInputSC } from "./four-digit-input.styles";
import FourDigitInputI from "./four-digit-input.interface";

const FourDigitInput: FC<FourDigitInputI> = ({ values, onChange, refs }) => {
  useEffect(() => {
    const firstDigitInput = refs[0].current;
    if (firstDigitInput) {
      firstDigitInput.focus();
    }
  }, []);

  return (
    <FourDigitInputSC>
      {values.map((value, index) => (
        <DigitInputSC
          key={index}
          variant="outlined"
          value={value}
          inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
          onChange={(e: any) => onChange(index, e.target.value)}
          InputProps={{ inputRef: refs[index] }}
          type="number"
        />
      ))}
    </FourDigitInputSC>
  );
};

export default FourDigitInput;
