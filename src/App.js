import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Stocks from "./pages/Stocks";
import Stock from "./pages/Stock";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
            <Route path="stocks" element={<Stocks />}>
              <Route path=":stockId" element={<Stock />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
