import React, { useState, useEffect } from "react";
import { FMI_KEY, FMI_URL } from "../Constants";

export const SearchContext = React.createContext({
  rowData: [],
  errors: [],
});

export const SearchProvider = (props) => {
  const [rowData, setRowData] = useState([]);
  const [errors, setErrors] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(FMI_URL(FMI_KEY));

      if (response.status !== 200) {
        throw new Error(response);
      }
      const responseJson = await response.json();

      const symbolArray = await responseJson.map(
        (stock) => `${stock.name} (${stock.symbol})`
      );

      await setRowData(symbolArray);
    };
    try {
      fetchData();
    } catch (error) {
      setErrors(error);
    }
  }, []);

  return (
    <SearchContext.Provider value={{ rowData, errors }}>
      {props.children}
    </SearchContext.Provider>
  );
};
