import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home.page";
import Stocks from "./pages/Stocks.page";
import Stock from "./pages/Stock.page";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stocks/" element={<Stocks />} />
          <Route path="/stocks/:stockId" element={<Stock />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
