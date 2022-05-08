import React from "react";
import { useParams } from "react-router-dom";

import Stock from "../components/stocks/Stock";
import BreadCrumb from "../components/layout/BreadCrumb";

const StockPage = () => {
  const { stockId } = useParams();
  console.log("im here");
  return (
    <>
      <BreadCrumb />
      <hr />
      <Stock id={stockId} />
    </>
  );
};

export default StockPage;
