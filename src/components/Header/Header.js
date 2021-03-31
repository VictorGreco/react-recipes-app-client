import React from "react";
import { NavLink } from "react-router-dom";

import makePrefix from "../../utils/make-prefix";
import ROUTES from "../../utils/routes";
import Button from "../Button";
// import { signOut } from "../../redux/user/user-actions";
// import { currentUserStateSelector } from "../../redux/user/user-selectors";

function Header() {
  // const currentUserState = useSelector(currentUserStateSelector);
  const currentUserState = { isAuthenticated: false };
  const { isAuthenticated } = currentUserState;
  const prefix = makePrefix("header");

  return (
    <header className="navbar navbar-light navbar-expand sticky-top bg-white border-bottom">
      <nav className="container">
        <NavLink
          to={ROUTES.HOME}
          activeClassName="active"
          className="navbar-brand"
          data-testid={prefix("project-name")}
        >
          Assembler School Recipes
        </NavLink>

        <ul className="navbar-nav ml-auto">
          {isAuthenticated ? (
            <Button
              additionalClasses="nav-item"
              variant="light"
              // onClick={() => dispatch(signOut())}
              data-testid={prefix("logout")}
            >
              Salir
            </Button>
          ) : (
            <>
              <li className="nav-item">
                <NavLink
                  to={ROUTES.LOGIN}
                  activeClassName="active"
                  className="nav-link"
                  data-testid={prefix("login")}
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to={ROUTES.SIGNUP}
                  activeClassName="active"
                  className="nav-link"
                  data-testid={prefix("register")}
                >
                  Registrar
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
