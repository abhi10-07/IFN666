import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Layout from "./components/layout/Layout";

import "./index.css";
import App from "./App";

import { SearchProvider } from "./context/SearchContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SearchProvider>
      <Layout>
        <App />
      </Layout>
    </SearchProvider>
  </BrowserRouter>
);
