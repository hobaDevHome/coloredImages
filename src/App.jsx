/* eslint-disable react/jsx-no-target-blank */
// @ts-nocheck

import "./App.css";

import { Routes, Route } from "react-router-dom";
import ColorsDetails from "./components/ColorsDetails";
import Home from "./Home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="color/:color" element={<ColorsDetails />} />
    </Routes>
  );
}

export default App;
