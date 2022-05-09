import React, { useEffect, useState } from "react";

import { LineChart } from "./Chart";
import DateFilter from "../history/DateFilter";
import {
  APLHA_HIGH_POINTS,
  APLHA_LOW_POINTS,
  APLHA_OPEN_POINTS,
  APLHA_CLOSE_POINTS,
  APLHA_VOLUME_POINTS,
} from "../../Constants";

const Graph = (props) => {
  const { stockChartData, chartType, page } = props;
  const [chartData, setChartData] = useState(stockChartData);
  const [chartShowData, setChartShowData] = useState({});
  const [isLoadingChart, setIsLoadingChart] = useState(true);
  const [chartDate, setChartDate] = useState("");

  const getChart = (chartData) => {
    const labels = [];
    const dataHighPoints = [];
    const dataLowPoints = [];
    const dataOpenPoints = [];
    const dataClosePoints = [];
    const dataVolumePoints = [];
    const stockDate = [];

    if (chartData.length !== 0) {
      chartData.map((item) =>
        Object.entries(item).forEach(([key, value]) => {
          if (key.length < 10) {
            return false;
          }

          switch (page) {
            case "Stock": {
              let timeStamp = "";
              let timePoint = "";
              timeStamp = key.split(" ");
              timePoint = timeStamp[1].split(":");
              timePoint = `${timePoint[0]}:${timePoint[1]}`;
              labels.push(`${timePoint}`);
              stockDate.push(`${timeStamp[0]}`);
              break;
            }

            case "Price": {
              labels.push(`${key}`);
              stockDate.push(`${key}`);
              break;
            }

            default:
              break;
          }

          Object.entries(value).forEach(([k, val]) => {
            switch (k) {
              case APLHA_HIGH_POINTS:
                dataHighPoints.push(val);
                break;

              case APLHA_LOW_POINTS:
                dataLowPoints.push(val);
                break;

              case APLHA_OPEN_POINTS:
                dataOpenPoints.push(val);
                break;

              case APLHA_CLOSE_POINTS:
                dataClosePoints.push(val);
                break;

              case APLHA_VOLUME_POINTS:
                dataVolumePoints.push(val);
                break;

              default:
                break;
            }
          });
        })
      );
    }

    const element = {
      labels,
      highPoints: dataHighPoints,
      lowPoints: dataLowPoints,
      openPoints: dataOpenPoints,
      closePoints: dataClosePoints,
      volumePoints: dataVolumePoints,
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
        text: "Market Indices - " + props.id + " Intraday figures",
      },
    },
  };

  useEffect(() => {
    const res = getChart(chartData);

    let recentLabels = res.labels.slice(0, 20);
    recentLabels.reverse();

    setChartDate(res.stockDate.slice(0, 1)[0]);

    const allDatasets = [
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
      {
        label: "Open",
        data: recentLabels.map((label, index) => res.openPoints[index]),
        borderColor: "rgb(36, 253, 3)",
        backgroundColor: "rgba(36, 253, 3, 0.5)",
      },
      {
        label: "Close",
        data: recentLabels.map((label, index) => res.closePoints[index]),
        borderColor: "rgb(253, 236, 3)",
        backgroundColor: "rgba(253, 236, 3, 0.5)",
      },
    ];

    const datasets = allDatasets.filter(
      (set) => chartType.indexOf(set.label) !== -1
    );

    const dataLabels = recentLabels;

    const filteredData = {
      valueSet: dataLabels.length > 0 ? true : false,
      labels: dataLabels,
      datasets,
    };

    setChartShowData(filteredData);
    filteredData["valueSet"]
      ? setIsLoadingChart(false)
      : setIsLoadingChart(true);
  }, [chartData, chartType]);

  const dateFilterHandler = (filteredData) => {
    setIsLoadingChart(true);
    setChartData(filteredData);
    filteredData["valueSet"]
      ? setIsLoadingChart(false)
      : setIsLoadingChart(true);
  };

  return isLoadingChart ? (
    "Chart Loading ..."
  ) : (
    <>
      {page === "Price" && (
        <DateFilter
          dataFilter={dateFilterHandler}
          allData={stockChartData}
          filteredData={chartShowData}
        />
      )}

      <figure>
        {chartShowData["valueSet"] === true && (
          <>
            <LineChart options={options} data={chartShowData} />
            <p>As on : {chartDate}</p>
          </>
        )}
      </figure>
    </>
  );
};

export default Graph;
