import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/css/header.css";
import { FaSearch } from "react-icons/fa";
import AutoComplete from "./autocomplete/AutoComplete";

import { SearchContext } from "../../context/SearchContext";

const SearchBox = () => {
  const [textIsValid, setTextIsValid] = useState(true);
  const textInputRef = useRef();
  const [stockFound, setStockFound] = useState("");

  const ctx = useContext(SearchContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event);

    const enteredText = textInputRef.current.value;

    if (
      enteredText.trim().length === 0 ||
      enteredText === "" ||
      enteredText == null
    ) {
      setTextIsValid(false);
      return;
    } else {
      setTextIsValid(true);
      if (stockFound === "") {
        let stk = enteredText.match(/\(([a-zA-Z0-9]+.*?)\)/i);
        navigate(`/stocks/${stk[1]}`);
      }
    }
  };

  const stockFlagHandler = (found) => {
    setStockFound(found);
  };

  return (
    <form onSubmit={submitHandler} className="header-search">
      <div className="d-flex justify-content-center h-100">
        <div className="search col-md-12">
          {" "}
          <AutoComplete
            textInputRef={textInputRef}
            stockFlag={stockFlagHandler}
            suggestions={ctx}
            inputClasses="search-input col-md-12"
          />
          <button className="search-icon">
            {" "}
            <FaSearch />{" "}
          </button>
          {!textIsValid && <p className="error">Please enter a valid Stock.</p>}
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
