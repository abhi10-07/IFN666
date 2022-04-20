import { React, useState, useRef } from "react";

import Input from "../UI/Input";
import "../../assets/css/banner.css";

const SearchBox = () => {
  const [textIsValid, setTextIsValid] = useState(true);
  const textInputRef = useRef();

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
    }
  };

  return (
    <div className="booking_ocline">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="book_room">
              <h1>Search stock for more info </h1>
              <form className="book_now" onSubmit={submitHandler}>
                <div className="row">
                  <div className="col-md-12">
                    <Input
                      ref={textInputRef}
                      classes="online_book"
                      label="Search"
                      input={{
                        id: "home-search",
                        type: "text",
                        placeholder: "Search Stock",
                      }}
                    />
                  </div>
                  <div className="col-md-12">
                    <button className="book_btn">Search</button>
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

export default SearchBox;
