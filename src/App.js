import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.page";
import StocksPage from "./pages/Stocks.page";
import StockPage from "./pages/Stock.page";
import HistoryPage from "./pages/History.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stocks/" element={<StocksPage />} />
      <Route path="/stocks/:stockId" element={<StockPage />} />
      <Route path="/stocks/:stockId/price-history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
