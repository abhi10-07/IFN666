import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateRange = () => {
  const [startDate, setStartDate] = useState(new Date("2014/02/08"));
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <form action="#" className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label for="input_from">From</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              className="form-control"
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label for="input_from">To</label>
            <DatePicker
              dateFormat="yyyy/MM/dd"
              className="form-control"
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
            />
          </div>
        </div>
      </form>
    </>
  );
};
