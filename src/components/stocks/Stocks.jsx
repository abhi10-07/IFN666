import { useState, useEffect, useRef, useCallback } from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { FMI_URL, FMI_KEY } from "../../Constants";

const Stocks = () => {
  const [textIsValid, setTextIsValid] = useState(true);
  const textInputRef = useRef();
  const [rowData, setRowData] = useState([]);
  const columns = [
    { headerName: "Name", field: "name" },
    { headerName: "Stocksymbol", field: "symbol" },
    { headerName: "Price", field: "price" },
    { headerName: "Exchange", field: "exchangeShortName" },
    { headerName: "Type", field: "type" },
  ];

  const navigate = useNavigate();

  const cellClickedHandler = useCallback((e) => {
    console.log(e);
    navigate(`/stocks/${e.data.symbol}`);
  });
  useEffect(() => {
    fetch(FMI_URL(FMI_KEY))
      .then((res) => res.json())
      .then((stocks) =>
        stocks.map((stock) => {
          return {
            symbol: stock.symbol,
            name: stock.name,
            price: stock.price,
            exchangeShortName: stock.exchangeShortName,
            type: stock.type,
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
        width: "100%",
      }}
    >
      <AgGridReact
        onCellClicked={cellClickedHandler}
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default Stocks;
