import React from "react";
import ReactDOM from "react-dom";
import Postview from "./Postview";
import Landing_page from "./Landing_page";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing_page />} />
        <Route path="data" element={<Postview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
