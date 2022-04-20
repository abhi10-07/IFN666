import React from "react";

import { Link } from "react-router-dom";

import "../../assets/css/breadcrumb.css";

const BreadCrumb = () => {
  return (
    <div className="main_cont">
      <span className="upc">you are here:</span>
      <ul className="bred_list">
        <li>
          <Link to="/">QUT-StockControl</Link>{" "}
          <span className="col_graysp">/</span>
        </li>
        <li>
          <Link to="/stocks">Stocks</Link> <span className="col_graysp">/</span>
        </li>
        <li>IBM</li>
      </ul>
    </div>
  );
};

export default BreadCrumb;
