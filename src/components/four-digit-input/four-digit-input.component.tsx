import { FC, KeyboardEvent, useEffect, useRef } from "react";

import { DigitInputSC, FourDigitInputSC } from "./four-digit-input.styles";
import FourDigitInputProps from "./four-digit-input.interface";

const FourDigitInput: FC<FourDigitInputProps> = ({
  values,
  onChange,
  refs,
}) => {
  useEffect(() => {
    const firstDigitInput = refs[0].current;
    if (firstDigitInput) {
      firstDigitInput.focus();
    }
  }, []);

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Backspace" && index > 0 && !values[index]) {
      refs[index - 1].current?.focus();
    }
  };

  return (
    <FourDigitInputSC>
      {values.map((value, index) => (
        <DigitInputSC
          key={index}
          variant="outlined"
          value={value}
          inputProps={{ maxLength: 1, style: { textAlign: "center" } }}
          onChange={(e: any) => onChange(index, e.target.value)}
          onKeyDown={(e: any) => handleKeyDown(index, e)}
          InputProps={{ inputRef: refs[index] }}
          type="number"
        />
      ))}
    </FourDigitInputSC>
  );
};

export default FourDigitInput;
