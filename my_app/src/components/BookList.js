import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BooksContext } from "../contexts/BookContext";

import CSSTransition from "react-transition-group/CSSTransition";
import "./BookList.css";

const BookList = () => {
  // Directly destructure from the context
  const { isLightTheme, light, dark } = useContext(ThemeContext);

  // the argument of this function is the value object from the Context file: either light or dark obj from the context
  const theme = isLightTheme ? light : dark;

  // Book list from the context
  const { bookList } = useContext(BooksContext);

  return (
    <CSSTransition
      in={isLightTheme}
      timeout={500}
      classNames="fade-book-list"
      mountOnEnter
    >
      <div
        className="book-list"
        style={{ color: theme.syntax, background: theme.bg }}
      >
        {bookList.map(book => <li key={book.id} style={{background: theme.ui}} className="books">{book.title}</li>)}
      </div>
    </CSSTransition>
  );
};

export default BookList;
