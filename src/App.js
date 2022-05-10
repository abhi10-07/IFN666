import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home.page";
import StocksPage from "./pages/Stocks.page";
import StockPage from "./pages/Stock.page";
import HistoryPage from "./pages/History.page";
import TopListStock from "./pages/TopListStock.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/stocks/" element={<StocksPage />} />
      <Route path="/stocks/:stockId" element={<StockPage />} />
      <Route path="/toplist/" element={<TopListStock />} />
      <Route path="/stocks/:stockId/price-history" element={<HistoryPage />} />
    </Routes>
  );
}

export default App;
