import { useState, useEffect, useMemo } from "react";
import { AgGridReact } from "ag-grid-react";
import { useNavigate } from "react-router-dom";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import "../../assets/css/stocks.css";

import { FMI_URL, FMI_KEY } from "../../Constants";

const Stocks = () => {
  const [rowData, setRowData] = useState([]);
  const columns = [
    { headerName: "Name", field: "name" },
    { headerName: "Stocksymbol", field: "symbol" },
    { headerName: "Price", field: "price" },
    { headerName: "Exchange", field: "exchangeShortName" },
    { headerName: "Type", field: "type" },
    { headerName: "Action", field: "button", cellClass: "click_cell" },
  ];

  const defaultColDefs = useMemo(
    () => ({
      editable: true,
      sortable: true,
      flex: 1,
      minWidth: 100,
      filter: true,
      resizable: true,
    }),
    []
  );

  const navigate = useNavigate();

  const cellClickedHandler = (sym) => {
    navigate(`/stocks/${sym}`);
  };
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
            button: `Click here`,
          };
        })
      )
      .then((symbols) => setRowData(symbols));
  }, []);

  return (
    <div
      className="ag-theme-alpine"
      style={{
        height: "600px",
        width: "100%",
      }}
    >
      <AgGridReact
        onCellClicked={(e) => {
          const field = e.colDef.field;
          if (field === "button") {
            cellClickedHandler(e.data.symbol);
          }
        }}
        columnDefs={columns}
        rowData={rowData}
        pagination={true}
        paginationPageSize={10}
        defaultColDef={defaultColDefs}
      />
    </div>
  );
};

export default Stocks;
