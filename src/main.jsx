import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Hackerboard from "./components/Hackerboard";
import Login from "./components/Login";
import Register from "./components/Register";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hackerboard" element={<Hackerboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />}  />
      </Routes>
    </Router>
  </React.StrictMode>
);
