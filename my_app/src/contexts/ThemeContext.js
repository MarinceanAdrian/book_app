import React, { createContext, useState } from "react";

// createContext returns an object that we can store in a variable named lets say ThemeContext
// but we can destructure it right away because the two main properties are Consumer and Provider
export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  // Boolean isLightTheme state
  const [isLightTheme, setIsLightTheme] = useState(true);

  // Define state object for each case - light and dark
  // it is basically an object that holds css values
  const [light, setLight] = useState({
    syntax: "#555",
    ui: "#ddd",
    bg: "#eee",
  });

  const [dark, setDark] = useState({
    syntax: "#ddd",
    ui: "#333",
    bg: "#555",
  });

  // Handle toggle theme function
  const handleToggleTheme = () => {
    // Changes the isLightTheme to false/true which triggers a re-rendering
    // than the state has isLightTheme: true which is the new value passed
    // to the value object of the Provider - action that changes things in our C
    // that make use of our state
    setIsLightTheme((prevTheme) => !prevTheme);
  };

  const value = {
    isLightTheme,
    light,
    dark,
    handleToggleTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
