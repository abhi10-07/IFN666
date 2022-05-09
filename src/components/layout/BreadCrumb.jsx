import React from "react";

import { Link } from "react-router-dom";

import "../../assets/css/breadcrumb.css";

const BreadCrumb = () => {
  const URL = window.location.href;
  const crumbs = URL.split("/")
    .splice(3)
    .filter((crumb) => crumb !== "");
  let urlString = "";

  const createBreadCrumbs = (crumb, index) => {
    urlString += `${crumb}/`;
    return crumbs.length - 1 === index ? (
      <li key={index}>
        <span className="col_graysp"> | </span>
        {crumb.toUpperCase()}
      </li>
    ) : (
      <li key={index}>
        <span className="col_graysp"> | </span>
        <Link to={`/${urlString}`}>{crumb.toUpperCase()}</Link>{" "}
      </li>
    );
  };
  return (
    <div className="main_cont">
      <span className="upc">you are here:</span>
      <ul className="bred_list">
        <li>
          <Link to="/">HOME</Link>{" "}
        </li>
        {crumbs.length > 0
          ? crumbs.map((crumb, index) => createBreadCrumbs(crumb, index))
          : ""}
      </ul>
    </div>
  );
};

export default BreadCrumb;
