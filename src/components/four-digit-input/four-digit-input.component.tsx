import { FC, KeyboardEvent, useEffect } from "react";

// props or interfaces imports
import FourDigitInputProps from "./four-digit-input.interface";

// styling imports
import { DigitInputSC, FourDigitInputSC } from "./four-digit-input.styles";

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
