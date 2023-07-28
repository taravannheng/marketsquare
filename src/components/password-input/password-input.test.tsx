import {
  fireEvent,
  screen,
} from "@testing-library/react";
import '@testing-library/jest-dom'

import PasswordInput from "./password-input.component";
import PasswordInterface from "../../interfaces/password.interface";
import { renderWithProvider } from "../../utils/test/test.util";
import colors from "../../styles/colors";

let password: PasswordInterface;

describe("EmailInput", () => {
  beforeAll(() => {
    password = {
      value: "tT1_testing",
      isValid: true,
      validityDetails: {
        isValidLength: true,
        hasUppercaseLetter: true,
        hasLowercaseLetter: true,
        hasNumber: true,
        hasSpecialCharacter: true,
        hasNoSpaces: true,
      },
    };
  })

  test("renders email input component", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);
    
    const input = screen.getByPlaceholderText("Enter your password");

    expect(input).toBeInTheDocument();
  });

  test("renders tooltip when input is focused", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.focus(input);

    const tooltip = screen.getByText("Password should include:");

    expect(tooltip).toBeInTheDocument();
  });

  test("tooltip disappears when input is not focused", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.focus(input);

    const tooltip = screen.getByText("Password should include:");

    fireEvent.blur(input);

    expect(tooltip).not.toBeInTheDocument();
  });

  test("calls the function handling the input change when the input value changes", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.change(input, { target: { value: "1" } });

    expect(changeHandler).toHaveBeenCalled();
  });

  test("renders the success status icon when the value is valid", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.focus(input);

    const label = screen.getByText("Password");
    // eslint-disable-next-line testing-library/no-node-access
    const statusIcon = label.nextSibling?.firstChild;
    
    fireEvent.blur(input);

    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveStyle(`color: ${colors.green}`);

  });

  test("renders the error status icon when the value is invalid", () => {
    password = {
      value: "tT1_",
      isValid: false,
      validityDetails: {
        isValidLength: false,
        hasUppercaseLetter: true,
        hasLowercaseLetter: true,
        hasNumber: true,
        hasSpecialCharacter: true,
        hasNoSpaces: true,
      },
    };
    
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.focus(input);
    fireEvent.blur(input);

    const label = screen.getByText("Password");
    // eslint-disable-next-line testing-library/no-node-access
    const statusIcon = label.nextSibling?.firstChild;

    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveStyle(`color: ${colors.red}`);
  });

  test("renders the error message when the value is invalid", () => {
    password = {
      value: "tT1_",
      isValid: false,
      validityDetails: {
        isValidLength: false,
        hasUppercaseLetter: true,
        hasLowercaseLetter: true,
        hasNumber: true,
        hasSpecialCharacter: true,
        hasNoSpaces: true,
      },
    };
    
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");

    fireEvent.focus(input);
    fireEvent.blur(input);

    const errorMessage = screen.getByText("Please enter a valid password!");

    expect(errorMessage).toBeInTheDocument();
  }
  );

  // test if input changes to type text when the visibility icon is clicked on
  test("show password when visibility icon is clicked on", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");
    // eslint-disable-next-line testing-library/no-node-access
    const showPasswordIcon = screen.getByTestId("VisibilityOffIcon");

    showPasswordIcon && fireEvent.click(showPasswordIcon);

    expect(input).toHaveAttribute("type", "text");
  });

  // test if input changes to type password when the visibility off icon is clicked on
  test("hide password when visibility icon is clicked on", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<PasswordInput password={password} placeholder="Enter your password" onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your password");
    // eslint-disable-next-line testing-library/no-node-access
    const showPasswordIcon = screen.getByTestId("VisibilityOffIcon");
    showPasswordIcon && fireEvent.click(showPasswordIcon);

    const hidePasswordIcon = screen.getByTestId("VisibilityIcon");
    hidePasswordIcon && fireEvent.click(hidePasswordIcon);

    expect(input).toHaveAttribute("type", "password");
  });

});