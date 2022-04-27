import React from "react";
import "../../assets/css/header.css";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <form action="" className="header-search">
      <div className="d-flex justify-content-center h-100">
        <div className="search col-md-12">
          {" "}
          <input
            type="text"
            className="search-input col-md-12"
            placeholder="search..."
            name=""
          />{" "}
          <button className="search-icon">
            {" "}
            <FaSearch />{" "}
          </button>{" "}
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
