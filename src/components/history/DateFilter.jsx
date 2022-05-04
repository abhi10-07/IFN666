import React from "react";

import { DateRange } from "../UI/DatePicker";

const DateFilter = (props) => {
  const { allData, filteredData } = props;

  const dateRange = {
    startDate: filteredData.labels[0],
    endDate: filteredData.labels[filteredData.labels.length - 1],
    minDate: Object.entries(allData[0])[
      Object.entries(allData[0]).length - 1
    ][0],
    maxDate: Object.entries(allData[0])[0][0],
  };

  const setDateHandler = (dates) => {
    const dateFilteredData = {};
    allData.map((item) =>
      Object.entries(item).forEach(([key, value]) => {
        let d = new Date(key);
        if (
          dates.from.getTime() <= d.getTime() &&
          dates.to.getTime() >= d.getTime()
        ) {
          dateFilteredData[key] = value;
        }
      })
    );

    const filteredArray = [dateFilteredData];
    props.dataFilter(filteredArray);
  };

  return (
    <div>
      <DateRange dateRange={dateRange} setDateHandler={setDateHandler} />
    </div>
  );
};

export default DateFilter;
