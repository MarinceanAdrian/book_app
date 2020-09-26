import React from "react";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";


const App = (props) => {
  return (
    <div className="App">
 
        <ThemeToggle />
        <Navbar />
        <BookList />
  
    </div>
  );
};

export default App;
