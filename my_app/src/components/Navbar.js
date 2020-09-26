import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { ThemeContext } from "../contexts/ThemeContext";

import CSSTransition from "react-transition-group/CSSTransition";
import "./Navbar.css";

const Navbar = () => {
  // Theme Context object - destructured
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // Auth Context object
  const isLogged = useContext(AuthContext);

  return (
    <CSSTransition
      in={isLightTheme}
      timeout={500}
      classNames="fade"
      mountOnEnter
    >
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <div>{isLogged.isLoggedIn ? "Logged in" : "Logged out"}</div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          {isLogged.isLoggedIn ? (
            <li onClick={isLogged.toggleLoggedIn} className="clickable">
              Sign Out
            </li>
          ) : (
            <li onClick={isLogged.toggleLoggedIn} className="clickable">
              Sign In
            </li>
          )}
        </ul>
      </nav>
    </CSSTransition>
  );
};

export default Navbar;
