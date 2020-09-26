import React, { createContext, useState } from "react";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [bookList, setBookList] = useState([
    { title: "name of the wind", id: 1 },
    { title: "the way of the kings", id: 2 },
    { title: "the final empire", id: 3 },
    { title: "the hero of ages", id: 4 },
  ]);

  const value = {
    bookList,
  };
  
  return (
    <BooksContext.Provider value={value}>
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksContextProvider;
