export const FMI_KEY = "cbfbcc3405c685d66f4623bc57dbb1a3";

export const FMI_URL = (key) => {
  return `https://financialmodelingprep.com/api/v3/stock/list?apikey=${key}`;
};

export const FMI_TOPGAINER_URL = (key) => {
  return `https://financialmodelingprep.com/api/v3/stock_market/gainers?apikey=${key}`;
};

export const FMI_TOPLOSER_URL = (key) => {
  return `https://financialmodelingprep.com/api/v3/stock_market/losers?apikey=${key}`;
};

export const FMI_TOPACTIVE_URL = (key) => {
  return `https://financialmodelingprep.com/api/v3/stock_market/actives?apikey=${key}`;
};

export const FMI_STOCK_INFO_URL = (sym, key) => {
  return `https://financialmodelingprep.com/api/v3/quote/${sym}?apikey=${key}`;
};

export const FMI_STOCK_DETAILS_URL = (sym, key) => {
  return `https://financialmodelingprep.com/api/v3/profile/${sym}?apikey=${key}`;
};

export const APLHA_URL = (sym, key) => {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${sym}&interval=30min&apikey=${key}`;
};

export const APLHA_DAILY_URL = (sym, key) => {
  return `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${sym}&apikey=${key}`;
};

export const ALPHA_KEY = "225PEG9TWITRQ874";

export const APLHA_HIGH_POINTS = "2. high";
export const APLHA_LOW_POINTS = "3. low";
export const APLHA_OPEN_POINTS = "1. open";
export const APLHA_CLOSE_POINTS = "4. close";
export const APLHA_VOLUME_POINTS = "5. volume";

export const STOCKCHARTDATASETS = ["High", "Low"];
export const PRICECHARTDATASETS = ["High", "Low", "Open", "Close"];
