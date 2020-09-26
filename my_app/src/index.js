import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";
import BookContextProvider from './contexts/BookContext'

ReactDOM.render(
  <AuthContextProvider>
    <ThemeContextProvider>
    <BookContextProvider>
      <App />
      </BookContextProvider>
    </ThemeContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
