import React from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { rootReducer } from "../../store/root.reducer";
import { legacy_createStore as createStore } from "redux";

export const renderWithProvider = (
  ui,
  {
    initialState,
    store = createStore(rootReducer, initialState),
    ...renderOptions
  } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <MemoryRouter>
        <Provider store={store}>{children}</Provider>;
      </MemoryRouter>
    );
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
