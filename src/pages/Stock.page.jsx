import React from "react";
import { useParams } from "react-router-dom";

import Stock from "../components/stocks/Stock";

const StockPage = () => {
  const { stockId } = useParams();
  return <Stock id={stockId} />;
};

export default StockPage;
