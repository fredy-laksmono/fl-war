import "./App.css";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import HowToPlay from "./components/HowToPlay";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howToPlay" element={<HowToPlay />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
