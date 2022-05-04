import React, { useState, useEffect } from "react";

import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import Graph from "../UI/Graph";
import {
  FMI_KEY,
  ALPHA_KEY,
  APLHA_URL,
  FMI_STOCK_DETAILS_URL,
  STOCKCHARTDATASETS,
} from "../../Constants";

import Loader from "../UI/Loader";

import "../../assets/css/about.css";
import tab_bg from "../../assets/images/bg_borderblue.jpg";

const Stock = (props) => {
  const [stockDetailsData, setStockDetailsData] = useState([]);
  const [stockTextData, setStockTextData] = useState([]);
  const [stockChartData, setStockChartData] = useState([]);

  const [activeLoader, setActiveLoader] = useState(true);

  const navigate = useNavigate();

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
      const response = await fetch(APLHA_URL(stockId, ALPHA_KEY));
      if (response.status !== 200) {
        throw new Error(response);
      }
      const responseData = await response.json();

      const apiTextData = [];
      const apiChartData = [];

      for (const key in responseData) {
        if (key === "Meta Data") apiTextData.push(responseData[key]);
        else apiChartData.push(responseData[key]);
      }

      setStockChartData(apiChartData);

      if (Object.keys(apiTextData).length !== 0) {
        let liArray = [];
        apiTextData.map((item) =>
          Object.entries(item).forEach(([k, value]) => {
            liArray.push(
              <li key={k}>
                {k}: {value}
              </li>
            );
          })
        );
        const infoData = <ul>{liArray.map((item) => item)}</ul>;
        setStockTextData(infoData);
      }

      return true;
    };
    fetchData();
  }, [stockId]);

  useEffect(() => {
    if (stockChartData.length > 0) {
      setLoaderHandler();
    }
  }, [stockChartData]);

  const navpriceHandler = () => {
    navigate(`/stocks/${stockId}/price-history`);
  };

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
          <div className="col-md-5">
            <div className="titlepage">
              <div className="margin_0">
                <div className="stock_price">
                  {stockDetailsData["price"]} {stockDetailsData["currency"]}
                </div>
                <div className="stock_change">
                  {" "}
                  {stockDetailsData["changes"] < 0 ? (
                    <>
                      <span style={{ color: "red" }}>
                        <FaCaretSquareDown /> {stockDetailsData["changes"]}
                      </span>
                    </>
                  ) : (
                    <>
                      <span style={{ color: "green" }}>
                        <FaCaretSquareUp /> {stockDetailsData["changes"]}
                      </span>
                    </>
                  )}
                </div>
                <div className="stock-edata">{stockTextData}</div>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={navpriceHandler}
                >
                  Price History
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about_img">
              <Graph
                stockChartData={stockChartData}
                id={props.id}
                chartType={STOCKCHARTDATASETS}
                page="Stock"
              />
            </div>
          </div>
          <div className="stock_desc">{stockDetailsData["description"]}</div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
