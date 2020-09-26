import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

import CSSTransition from "react-transition-group/CSSTransition";

import './ThemeToggle.css'

const ThemeToggle = () => {
  const [darkThemeState, setDarkThemeState] = useState(false);

  // Destructure handleToggleTheme from the context object
  const { handleToggleTheme } = useContext(ThemeContext);

  // Change theme handler method that gets invoked when the button is clicked
  const changeThemeHandler = () => {
    // handleToggleTheme - the method that changes theme in the context
    handleToggleTheme();

    // Update the local state toggeling true/false
    setDarkThemeState((prevTheme) => {
      return !prevTheme;
    });
  };

  // Initialize button variable
  let button;

  // Check the state value and render conditionally
  if (darkThemeState) {
    button = (
      <button
        onClick={changeThemeHandler}
        style={{ background: "#383838", color: "#eee" }}
      >
        🌙 Dark Theme
      </button>
    );
  } else {
    button = <button onClick={changeThemeHandler}>🌞 Light Theme</button>;
  }

  return (
    <CSSTransition
      in={darkThemeState}
      timeout={500}
      classNames="fade-btn"
      onExiting={() => alert('ies')}
    >
      {button}
    </CSSTransition>
  );
};
export default ThemeToggle;
