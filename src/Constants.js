export const FMI_KEY = "cbfbcc3405c685d66f4623bc57dbb1a3";

export const FMI_URL = (key) => {
  return `https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`;
};

export const APLHA_URL = (sym, key) => {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=30min&apikey=${key}`;
};

export const ALPHA_KEY = "225PEG9TWITRQ874";

export const APLHA_HIGH_POINTS = "2. high";
export const APLHA_LOW_POINTS = "3. low";
