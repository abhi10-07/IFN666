import React, { useEffect, useState } from "react";

import { LineChart } from "../UI/Chart";
import { APLHA_HIGH_POINTS, APLHA_LOW_POINTS } from "../../Constants";

const Graph = (props) => {
  const { stockChartData } = props;
  const [chartData, setChartData] = useState({});
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [chartDate, setChartDate] = useState("");

  const getChart = (stockChartData) => {
    const labels = [];
    const dataHighPoints = [];
    const dataLowPoints = [];
    const stockDate = [];

    if (stockChartData.length !== 0) {
      stockChartData.map((item) =>
        Object.entries(item).forEach(([key, value]) => {
          let timeStamp = "";
          let datePoint = "";
          let timePoint = "";

          if (key.length < 10) {
            return false;
          }
          timeStamp = key.split(" ");
          // datePoint = timeStamp[0].split("-");
          timePoint = timeStamp[1].split(":");
          timePoint = `${timePoint[0]}:${timePoint[1]}`;
          labels.push(`${timePoint}`);
          stockDate.push(`${timeStamp[0]}`);

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
      stockDate,
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

    let recentLabels = res.labels.slice(0, 20);
    recentLabels.reverse();

    setChartDate(res.stockDate.slice(0, 1)[0]);

    const datasets = [
      {
        label: "High",
        data: recentLabels.map((label, index) => res.highPoints[index]),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Low",
        data: recentLabels.map((label, index) => res.lowPoints[index]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ];

    const dataLabels = recentLabels;

    const data = {
      valueSet: dataLabels.length > 0 ? true : false,
      labels: dataLabels,
      datasets,
    };

    setChartData(data);
    data["valueSet"] ? setIsLoadingChart(false) : setIsLoadingChart(true);
  }, [stockChartData]);

  return isLoadingChart ? (
    "Chart Loading ..."
  ) : (
    <figure>
      {chartData["valueSet"] === true && (
        <>
          <LineChart options={options} data={chartData} />
          <p>As on : {chartDate}</p>
        </>
      )}
    </figure>
  );
};

export default Graph;
