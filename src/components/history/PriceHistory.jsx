import React, { useState, useEffect } from "react";

import Graph from "../UI/Graph";
import {
  FMI_KEY,
  ALPHA_KEY,
  APLHA_DAILY_URL,
  FMI_STOCK_DETAILS_URL,
  PRICECHARTDATASETS,
} from "../../Constants";

import Loader from "../UI/Loader";

import "../../assets/css/about.css";
import tab_bg from "../../assets/images/bg_borderblue.jpg";

const PriceHistory = (props) => {
  const [stockDetailsData, setStockDetailsData] = useState([]);
  const [stockChartData, setStockChartData] = useState([]);

  const [activeLoader, setActiveLoader] = useState(true);

  const setLoaderHandler = () => {
    setActiveLoader(false);
  };

  const stockId = props.id;

  useEffect(() => {
    const fetchData = async () => {
      // For stock description
      const responseDesc = await fetch(FMI_STOCK_DETAILS_URL(stockId, FMI_KEY));
      if (responseDesc.status !== 200) {
        throw new Error(responseDesc);
      }
      const responseDescData = await responseDesc.json();

      setStockDetailsData(responseDescData[0]);

      // For chart
      const response = await fetch(APLHA_DAILY_URL(stockId, ALPHA_KEY));
      if (response.status !== 200) {
        throw new Error(response);
      }
      const responseData = await response.json();

      const apiChartData = [];

      for (const key in responseData) {
        if (key !== "Meta Data") {
          apiChartData.push(responseData[key]);
        }
      }

      setStockChartData(apiChartData);

      return true;
    };
    fetchData();
  }, [stockId]);

  useEffect(() => {
    if (stockChartData.length > 0) {
      setLoaderHandler();
    }
  }, [stockChartData]);

  return activeLoader ? (
    <Loader />
  ) : (
    <div className="about">
      <div className="container-fluid">
        <div
          className="stock-tab"
          style={{ backgroundImage: "url(" + tab_bg + ")" }}
        >
          <h1>
            {`${stockDetailsData["symbol"]} (${stockDetailsData["companyName"]})`}{" "}
            <img
              src={stockDetailsData["image"]}
              alt={stockDetailsData["symbol"]}
            />
          </h1>
          <h6>
            <span>Sector</span>: {stockDetailsData["sector"]}
          </h6>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="about_img">
              <Graph
                stockChartData={stockChartData}
                id={props.id}
                chartType={PRICECHARTDATASETS}
                page="Price"
              />
            </div>
          </div>
          <div className="stock_desc">{stockDetailsData["description"]}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceHistory;
