import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Menu />

      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
