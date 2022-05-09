import React, { useState, useEffect } from "react";
import { FMI_KEY, FMI_URL } from "../Constants";

export const SearchContext = React.createContext({
  rowData: [],
});

export const SearchProvider = (props) => {
  const [rowData, setRowData] = useState([]);
  useEffect(() => {
    let symbolArray = [];
    fetch(FMI_URL(FMI_KEY))
      .then((res) => res.json())
      .then((stocks) =>
        stocks.map((stock) => `${stock.name} (${stock.symbol})`)
      )
      .then((res) => {
        symbolArray = res;
        return symbolArray;
      })
      .then((stocks) => setRowData(stocks));
  }, []);

  return (
    <SearchContext.Provider value={rowData}>
      {props.children}
    </SearchContext.Provider>
  );
};
