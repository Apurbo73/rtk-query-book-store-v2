import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Detail from "./component/detail/Detail";
import AddBook from "./component/add/AddBook";

function App() {
  return (
    <BrowserRouter className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/books/:id" element={<Detail />} />
        <Route path="/books/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
