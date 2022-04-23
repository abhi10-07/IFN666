import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Stocks from "./pages/Stocks.page";
import Stock from "./pages/Stock.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stocks/" element={<Stocks />} />
      <Route path="/stocks/:stockId" element={<Stock />} />
    </Routes>
  );
}

export default App;
