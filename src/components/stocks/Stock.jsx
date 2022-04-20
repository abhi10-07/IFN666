import React, { useState, useEffect } from "react";

import { LineChart } from "../UI/Chart";
import {
  FMI_KEY,
  ALPHA_KEY,
  APLHA_URL,
  APLHA_HIGH_POINTS,
  APLHA_LOW_POINTS,
  FMI_STOCK_DETAILS_URL,
} from "../../Constants";

import "../../assets/css/about.css";
import tab_bg from "../../assets/images/bg_borderblue.jpg";

const Stock = (props) => {
  const [stockDetailsData, setStockDetailsData] = useState([]);
  const [stockTextData, setStockTextData] = useState([]);
  const [stockChartData, setStockChartData] = useState([]);
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const stockId = props.id;

  useEffect(() => {
    const fetchData = async () => {
      // For stock description
      const responseDesc = await fetch(FMI_STOCK_DETAILS_URL(stockId, FMI_KEY));
      const responseDescData = await responseDesc.json();

      setStockDetailsData(responseDescData[0]);

      // For chart
      const response = await fetch(APLHA_URL(stockId, ALPHA_KEY));
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
    };
    fetchData();
  }, [stockId]);

  const getChart = (stockChartData) => {
    const labels = [];
    const dataHighPoints = [];
    const dataLowPoints = [];

    if (stockChartData.length !== 0) {
      stockChartData.map((item) =>
        Object.entries(item).forEach(([key, value]) => {
          let timeStamp = "";
          let datePoint = "";
          let timePoint = "";
          timeStamp = key.split(" ");
          datePoint = timeStamp[0].split("-");
          timePoint = timeStamp[1].split(":");
          timePoint = `${timePoint[0]}:${timePoint[1]}`;
          labels.push(`${datePoint[2]}-${datePoint[1]} ${timePoint}`);

          Object.entries(value).forEach(([k, val]) => {
            if (k === APLHA_HIGH_POINTS) {
              dataHighPoints.push(val);
            }
            if (k === APLHA_LOW_POINTS) {
              dataLowPoints.push(val);
            }
          });
        })
      );
    }

    const element = {
      labels,
      highPoints: dataHighPoints,
      lowPoints: dataLowPoints,
    };

    return element;
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Market Indices - " + props.id,
      },
    },
  };

  useEffect(() => {
    const res = getChart(stockChartData);

    res.labels.reverse();

    const datasets = [
      {
        label: "High",
        data: res.labels.map((label, index) => res.highPoints[index]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Low",
        data: res.labels.map((label, index) => res.lowPoints[index]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ];

    const dataLabels = res.labels;

    const data = {
      valueSet: dataLabels.length > 0 ? true : false,
      labels: dataLabels,
      datasets,
    };

    setChartData(data);
    setIsLoading(false);
  }, [stockChartData]);

  return (
    <div className="about">
      <div className="container-fluid">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <>
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
                  <div className="margin_0"></div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="about_img">
                  <figure>
                    {chartData["valueSet"] === true && (
                      <LineChart options={options} data={chartData} />
                    )}
                  </figure>
                  <div className="stock-edata">{stockTextData}</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stock;