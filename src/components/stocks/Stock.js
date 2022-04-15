import React, { useState, useEffect } from "react";

import { LineChart } from "../UI/Chart";
import { ALPHA_KEY, APLHA_URL } from "../../Constants";

import "../../assets/css/about.css";

const Stock = (props) => {
  const [metaData, setMetaData] = useState([]);
  const [intervalData, setIntervalData] = useState([]);

  //   const fetchUrl = APLHA_URL(props.id, ALPHA_KEY);

  const setIntValue = (dataValue) => {
    setMetaData(dataValue["Meta Data"]);
    setIntervalData(dataValue["Time Series (5min)"]);
  };

  useEffect(() => {
    fetch(APLHA_URL(props.id, ALPHA_KEY))
      .then((res) => res.json())
      .then((dataValue) => setIntValue(dataValue));
  }, []);

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

  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "High",
        data: labels.map(
          () => Math.floor(Math.random() * (1000 - 10 + 1)) + 10
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Low",
        data: labels.map(() => Math.floor(Math.random() * (100 - 10 + 1)) + 10),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <div className="titlepage">
              <p className="margin_0">
                {metaData.length > 0 && (
                  <ul>
                    {Object.entries(metaData).forEach(([key, value]) => (
                      <li key={key}>
                        `${key}: ${value}`
                      </li>
                    ))}
                  </ul>
                )}
              </p>
            </div>
          </div>
          <div className="col-md-7">
            <div className="about_img">
              <figure>
                <LineChart options={options} data={data} />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stock;
