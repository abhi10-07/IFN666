import { useState, useEffect, useRef, useCallback, useMemo } from "react";
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
    { headerName: "Action", field: "button" },
  ];

  const defaultColDefs = useMemo(
    () => ({
      Sortable: true,
      filter: true,
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
            button: "Click Details",
          };
        })
      )
      .then((symbols) => setRowData(symbols));
  }, []);

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "350px",
        width: "100%",
      }}
    >
      <AgGridReact
        onCellClicked={(e) => {
          const field = e.colDef.field;
          const colIndex = e.columnApi
            .getAllColumns()
            ?.findIndex((col) => col.getColDef().field === field);

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
