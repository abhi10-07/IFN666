import { React, useState, useRef, useEffect, useContext } from "react";

import { useNavigate } from "react-router-dom";

import { SearchContext } from "../../context/SearchContext";

import AutoComplete from "../UI/autocomplete/AutoComplete";
import "../../assets/css/banner.css";
import "../../assets/css/responsive.css";

const BannerSearch = () => {
  const [textIsValid, setTextIsValid] = useState(true);
  const textInputRef = useRef();
  const [stockFound, setStockFound] = useState("");

  const ctx = useContext(SearchContext);

  const navigate = useNavigate();

  const submitHandler = (event) => {
    event.preventDefault();

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

  useEffect(() => {
    stockFound === "disabled"
      ? (document.getElementById("search_stock").disabled = true)
      : (document.getElementById("search_stock").disabled = false);
  }, [stockFound]);

  return (
    <div className="booking_ocline">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="book_room">
              <h1>
                Search stock <br />
                for more info{" "}
              </h1>
              <form className="book_now" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-md-12">
                    <AutoComplete
                      textInputRef={textInputRef}
                      stockFlag={stockFlagHandler}
                      suggestions={ctx}
                      divClasses="online_book"
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="book_btn" id="search_stock">
                      Search
                    </button>
                    {!textIsValid && (
                      <p className="error">Please enter a valid Stock.</p>
                    )}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSearch;
