import {
  fireEvent,
  screen,
} from "@testing-library/react";
import '@testing-library/jest-dom'

import EmailInput from "./email-input.component";
import EmailInterface from "../../interfaces/email.interface";
import { renderWithProvider } from "../../utils/test/test.util";
import COLORS from "../../styles/colors";

let email: EmailInterface;

describe("EmailInput", () => {
  beforeAll(() => {
    email = {
      value: "test@example.com",
      isValid: true,
      validityDetails: {
        isValidUsername: true,
        isValidDomain: true,
        hasAt: true,
      },
    };
  })

  test("renders email input component", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);
    
    const input = screen.getByPlaceholderText("example@gmail.com");

    expect(input).toBeInTheDocument();
  });

  test("renders tooltip when input is focused", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("example@gmail.com");

    fireEvent.focus(input);

    const tooltip = screen.getByText("Email should include:");

    expect(tooltip).toBeInTheDocument();
  });

  test("tooltip disappears when input is not focused", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("example@gmail.com");

    fireEvent.focus(input);

    const tooltip = screen.getByText("Email should include:");

    fireEvent.blur(input);

    expect(tooltip).not.toBeInTheDocument();
  });

  test("calls the function handling the input change when the input value changes", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("example@gmail.com");

    fireEvent.change(input, { target: { value: "1" } });

    expect(changeHandler).toHaveBeenCalled();
  });

  test("renders the success status icon when the value is valid", () => {
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("example@gmail.com");

    fireEvent.focus(input);

    const label = screen.getByText("Email");
    // eslint-disable-next-line testing-library/no-node-access
    const statusIcon = label.nextSibling?.firstChild;
    
    fireEvent.blur(input);

    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveStyle(`color: ${colors.green}`);

  });

  test("renders the error status icon when the value is invalid", () => {
    email = {
      value: "test@example",
      isValid: false,
      validityDetails: {
        isValidUsername: true,
        isValidDomain: false,
        hasAt: true,
      },
    };
    
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("example@gmail.com");

    fireEvent.focus(input);
    fireEvent.blur(input);

    const label = screen.getByText("Email");
    // eslint-disable-next-line testing-library/no-node-access
    const statusIcon = label.nextSibling?.firstChild;

    expect(statusIcon).toBeInTheDocument();
    expect(statusIcon).toHaveStyle(`color: ${COLORS.RED.R500}`);
  });

  test("renders the error message when the value is invalid", () => {
    email = {
      value: "test@example",
      isValid: false,
      validityDetails: {
        isValidUsername: true,
        isValidDomain: false,
        hasAt: true,
      },
    };
    
    const changeHandler = jest.fn();

    renderWithProvider(<EmailInput email={email} onChange={changeHandler} />);

    const input = screen.getByPlaceholderText("example@gmail.com");

    fireEvent.focus(input);
    fireEvent.blur(input);

    const errorMessage = screen.getByText("Please enter a valid email!");

    expect(errorMessage).toBeInTheDocument();
  }
  );
});