import React from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HillmanPage from "./pages/HillmanPage";
import OtherPage from "./pages/OtherPage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";


function App() {
  return <div className="App">
    <Header/>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="hillman" element={<HillmanPage />} />
    <Route path="/" element={<HomePage />} />
    <Route path="other" element={<OtherPage />} />
    <Route path="*" element={<ErrorPage />} />
    <Route path="*" element={<AuthPage />} />
    </Routes></div>;
}

export default App;
