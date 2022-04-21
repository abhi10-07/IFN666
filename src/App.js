import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.page";
import Stocks from "./pages/Stocks.page";
import Stock from "./pages/Stock.page";

import UserContext from "./context/UserContext";

import Loader from "./components/UI/Loader";

function App() {
  const [activeLoader, setActiveLoader] = useState(true);
  const setLoaderHandler = () => {
    setActiveLoader(false);
  };

  return (
    <UserContext.Provider
      value={{
        setLoaderHandler,
      }}
    >
      {activeLoader && <Loader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stocks/" element={<Stocks />} />
        <Route path="/stocks/:stockId" element={<Stock />} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
