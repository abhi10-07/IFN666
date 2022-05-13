import React from "react";
import { useParams } from "react-router-dom";

import PriceHistory from "../components/history/PriceHistory";
import BreadCrumb from "../components/layout/BreadCrumb";

const HistoryPage = () => {
  const { stockId } = useParams();
  return (
    <>
      <BreadCrumb />
      <hr />
      <PriceHistory id={stockId} />
    </>
  );
};

export default HistoryPage;
