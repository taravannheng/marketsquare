import {
  fireEvent,
  screen,
} from "@testing-library/react";
import '@testing-library/jest-dom'

import UsernameInput from "./username-input.component";
import UsernameInterface from "../../interfaces/username.interface";
import { renderWithProvider } from "../../utils/test/test.util";
import COLORS from "../../styles/colors";

let username: UsernameInterface;

describe("UsernameInput", () => {
  beforeAll(() => {
    username = {
      value: "test",
      isValid: true,
      validityDetails: {
        isValidLength: true,
        isValidCharacters: true,
        hasNoSpaces: true,
      },
    };
  })

  test("renders UsernameInput component", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);
    
    const input = screen.getByPlaceholderText("Enter your username");

    expect(input).toBeInTheDocument();
  });

  test("renders tooltip when input is focused", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your username");

    fireEvent.focus(input);

    const tooltip = screen.getByText("Username should be:");

    expect(tooltip).toBeInTheDocument();
  });

  test("tooltip disappears when input is not focused", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your username");

    fireEvent.focus(input);

    const tooltip = screen.getByText("Username should be:");

    fireEvent.blur(input);

    expect(tooltip).not.toBeInTheDocument();
  });

  test("calls the function handling the input change when the input value changes", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your username");

    fireEvent.change(input, { target: { value: "1" } });

    expect(changeHandler).toHaveBeenCalled();
  });

  test("renders the success status icon when the value is valid", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your username");

    fireEvent.focus(input);

    const label = screen.getByText("Username");
    // eslint-disable-next-line testing-library/no-node-access
    const statusIcon = label.nextSibling?.firstChild;
    
    fireEvent.blur(input);

    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveStyle(`color: ${colors.green}`);

  });

  test("renders the error status icon when the value is invalid", () => {
    username = {
      value: "1",
      isValid: false,
      validityDetails: {
        isValidLength: false,
        isValidCharacters: true,
        hasNoSpaces: true,
      },
    };
    
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your username");

    fireEvent.focus(input);
    fireEvent.blur(input);

    const label = screen.getByText("Username");
    // eslint-disable-next-line testing-library/no-node-access
    const statusIcon = label.nextSibling?.firstChild;

    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveStyle(`color: ${colors.red}`);
  });

  test("renders the error message when the value is invalid", () => {
    username = {
      value: "1",
      isValid: false,
      validityDetails: {
        isValidLength: false,
        isValidCharacters: true,
        hasNoSpaces: true,
      },
    };
    
    const changeHandler = jest.fn();

    renderWithProvider(<UsernameInput username={username} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("Enter your username");

    fireEvent.focus(input);
    fireEvent.blur(input);

    const errorMessage = screen.getByText("Please enter a valid username!");

    expect(errorMessage).toBeInTheDocument();
  }
  );
});