import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  // State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle Logged in state
  const toggleLoggedIn = () => {
    setIsLoggedIn((prevLoggedIn) => !prevLoggedIn);
  };

  // Create here the object to be passed to the value prop
  const value = {
    isLoggedIn,
    toggleLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
