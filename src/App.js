import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./scss/App.scss";
import Navbar from "./components/layout/Navbar";
import Homepage from "./components/layout/Homepage";
import Design from "./components/layout/Design";
import WebDev from "./components/layout/WebDev";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route exct path="/" element={<Homepage />} />
          <Route exct path="/design" element={<Design />} />
          <Route exct path="/webdev" element={<WebDev />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
