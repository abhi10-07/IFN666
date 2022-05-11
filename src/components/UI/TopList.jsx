import React from "react";

import { Link } from "react-router-dom";

import { FaCaretSquareDown, FaCaretSquareUp } from "react-icons/fa";
import "../../assets/css/toplist.css";
import ModalError from "./ModalError";

const TopList = (props) => {
  return (
    <ul className="list-group stock-top-list">
      {props.toplist.length > 1 ? (
        props.toplist.map((stock) => (
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
        ))
      ) : (
        <>
          <li>Something wrong happened ☹️☹️☹️</li>
          {props.toplist.length === 1 ? (
            <>
              <li style={{ color: "red", margin: "5px" }}>
                {props.toplist[0].error}
              </li>
              <ModalError message={props.toplist[0].error} />
            </>
          ) : (
            ""
          )}
        </>
      )}
    </ul>
  );
};

export default TopList;
