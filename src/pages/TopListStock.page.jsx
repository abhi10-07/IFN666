import React from "react";
import { useLocation } from "react-router-dom";

import TopList from "../components/UI/TopList";
import BreadCrumb from "../components/layout/BreadCrumb";

const TopListStock = (props) => {
  const location = useLocation();
  const stocksList = location.state ? location.state.stocksList : [];
  const title = location.state ? location.state.title : "Top Stocks";

  return (
    <>
      <BreadCrumb />
      <hr />
      <h2>{title}</h2>
      <TopList toplist={stocksList} />
    </>
  );
};

export default TopListStock;
