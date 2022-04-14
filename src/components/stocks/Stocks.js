import { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const API_KEY = "cbfbcc3405c685d66f4623bc57dbb1a3";

const Stocks = () => {
  const [rowData, setRowData] = useState([]);
  const columns = [
    { headerName: "Stocksymbol", field: "symbol" },
    { headerName: "Name", field: "name" },
    { headerName: "Industry", field: "sector" },
  ];

  useEffect(() => {
    fetch(
      `https://financialmodelingprep.com/api/v3/nasdaq_constituent?apikey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((stocks) =>
        stocks.map((stock) => {
          return {
            symbol: stock.symbol,
            name: stock.name,
            sector: stock.sector,
          };
        })
      )
      .then((symbols) => setRowData(symbols));
  }, []);

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "300px",
        width: "800px",
      }}
    >
      <AgGridReact columnDefs={columns} rowData={rowData} />
    </div>
  );
};

export default Stocks;
