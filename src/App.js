import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HillmanPage from "./pages/HillmanPage";
import OtherPage from "./pages/OtherPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return <div className="App">Hello Building managment!
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="hillman" element={<HillmanPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="other" element={<OtherPage />} />
    <Route path="*" element={<ErrorPage />} />
    </Routes></div>;
}

export default App;
