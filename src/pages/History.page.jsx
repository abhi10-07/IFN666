import React from "react";
import { useParams } from "react-router-dom";

import PriceHistory from "../components/history/PriceHistory";

const HistoryPage = () => {
  const { stockId } = useParams();
  return <PriceHistory id={stockId} />;
};

export default HistoryPage;
