import React from "react";

import Stocks from "../components/stocks/Stocks";
import BreadCrumb from "../components/layout/BreadCrumb";

const StocksPage = () => {
  return (
    <>
      <BreadCrumb />
      <hr />
      <Stocks />
    </>
  );
};

export default StocksPage;
