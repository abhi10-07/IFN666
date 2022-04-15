export const FMI_KEY = "cbfbcc3405c685d66f4623bc57dbb1a3";

export const FMI_URL = (key) => {
  return `https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`;
};

export const APLHA_URL = (sym, key) => {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=5min&apikey=${key}`;
};

export const ALPHA_KEY = "225PEG9TWITRQ874";
