import { React, useState } from "react";

import "../../assets/css/banner.css";

const SearchBox = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  return (
    <div className="booking_ocline">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="book_room">
              <h1>Search stock for more info </h1>
              <form className="book_now">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="online_book"
                      placeholder="Search stock"
                      type="text"
                      name="search_text"
                      value={name}
                      onChange={(event) => {
                        if (/[0-9]/.test(event.target.value)) {
                          setError("Names shouldn't have numbers");
                        } else {
                          setError(null);
                        }
                        if (/[]/.test(event.target.value)) {
                          setError("Sould not be blank");
                        } else {
                          setError(null);
                        }
                        setName(event.target.value);
                      }}
                    />{" "}
                    {error != null ? <p>Error: {error}</p> : null}
                  </div>
                  <div className="col-md-12">
                    <button className="book_btn">Search</button>
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
