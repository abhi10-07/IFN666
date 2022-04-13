import React from "react";

import "../../assets/css/banner.css";

const SearchBox = () => {
  return (
    <div className="booking_ocline">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="book_room">
              <h1>Search stock for more info</h1>
              <form className="book_now">
                <div className="row">
                  <div className="col-md-12">
                    <input
                      className="online_book"
                      placeholder="Search stock"
                      type="text"
                      name="search_text"
                    />
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
