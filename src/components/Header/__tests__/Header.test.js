import userEvent from "@testing-library/user-event";
import React from "react";
import { renderWithReduxAndRouter } from "../../../utils/test-utils";

import Header from "..";

describe("<Header />", () => {
  it("renders the unauthenticated user", () => {
    const { getByTestId, queryByTestId, getByText } = renderWithReduxAndRouter(
      <Header />,
      {
        initialState: {
          user: {
            isAuthenticated: false,
          },
        },
      },
    );

    const homeLink = getByText("Assembler School Recipes");
    const signOutButton = queryByTestId("header-logout");
    const loginButton = getByText("Login");
    const signUpButton = getByText("Registrar");

    expect(homeLink).toHaveProperty("href");
    expect(getByTestId("header-project-name")).toBeInTheDocument();
    expect(signOutButton).not.toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
    expect(getByTestId("header-login")).toBeInTheDocument();
    expect(getByTestId("header-register")).toBeInTheDocument();
  });

  it("renders the authenticated user", () => {
    const {
      getByTestId,
      queryByText,
      queryByTestId,
    } = renderWithReduxAndRouter(<Header />, {
      initialState: {
        user: {
          isAuthenticated: true,
        },
      },
    });

    const signOutButton = getByTestId("header-logout");
    const loginButton = queryByText("Login");
    const signUpButton = queryByText("Registrar");

    expect(getByTestId("header-project-name")).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
    expect(loginButton).not.toBeInTheDocument();
    expect(signUpButton).not.toBeInTheDocument();
    expect(queryByTestId("header-login")).not.toBeInTheDocument();
    expect(queryByTestId("header-register")).not.toBeInTheDocument();
  });
});
