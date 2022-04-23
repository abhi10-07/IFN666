import React from "react";

import { Link } from "react-router-dom";

import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";
import "../../assets/css/toplist.css";

const TopList = (props) => {
  return (
    <ul className="list-group stock-top-list">
      {props.toplist.map((stock) => (
        <Link
          to={`/stocks/${stock.symbol}`}
          className="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
          _target="blank"
          key={stock.symbol}
        >
          <div className="flex-column">
            {stock.name}
            <p className="price">{stock.price} USD</p>
          </div>
          <div className="image-parent">
            <span className="badge badge-info badge-pill">
              {" "}
              {stock.change > 0 ? (
                <span style={{ color: "green" }}>
                  <FaCaretSquareUp /> {stock.change} (
                  {stock.changesPercentage.toFixed(2)}%)
                </span>
              ) : (
                <span style={{ color: "red" }}>
                  <FaCaretSquareDown /> {stock.change} (
                  {stock.changesPercentage.toFixed(2)}%)
                </span>
              )}
            </span>
          </div>
        </Link>
      ))}
    </ul>
  );
};

export default TopList;
