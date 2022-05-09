import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateRange = (props) => {
  const minDate = new Date(props.dateRange.minDate);
  const maxDate = new Date(props.dateRange.maxDate);
  const [startDate, setStartDate] = useState(
    new Date(props.dateRange.startDate)
  );
  const [endDate, setEndDate] = useState(new Date(props.dateRange.endDate));

  const dateChange = {
    from: startDate,
    to: endDate,
  };

  const dateChangehandler = (dates, type) => {
    if (type === "from") {
      dateChange.from = dates;
      setStartDate(dates);
      console.log(dates);
    } else {
      dateChange.to = dates;
      setEndDate(dates);
    }
    props.setDateHandler(dateChange);
  };

  return (
    <>
      <form action="#" className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="input_from">From</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              className="form-control"
              selected={startDate}
              onChange={(date) => dateChangehandler(date, "from")}
              selectsStart
              startDate={startDate}
              endDate={endDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="input_from">To</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              className="form-control"
              selected={endDate}
              onChange={(date) => dateChangehandler(date, "to")}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={minDate}
              maxDate={maxDate}
            />
          </div>
        </div>
      </form>
    </>
  );
};
