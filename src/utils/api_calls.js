import axios from 'axios';

const nasdaqDataPoints = {
  Gold: "/LBMA/GOLD",
  Oil: "/OPEC/ORB",
};
Object.freeze(nasdaqDataPoints);

const NASDAQ_API_BASE_URL = "https://data.nasdaq.com/api/v3/datasets";
const NASDAQ_API_ENDPART_URL = `/data.json?api_key=${process.env.REACT_APP_NASDAQ_API_KEY}`;

const EXCHANGERATE_API_BASE_URL = "https://api.exchangerate.host/timeseries?base=USD&symbols=EUR,COP";

const makeApiCall = (url) => {
  return axios.get(url, {responseType: 'json'});
};

export const getOilPrices = async () => {
  const oilUrl = NASDAQ_API_BASE_URL.concat(nasdaqDataPoints.Oil,NASDAQ_API_ENDPART_URL);
  return makeApiCall(oilUrl);
};

export const getGoldPrices = async () => {
  const goldUrl = NASDAQ_API_BASE_URL.concat(nasdaqDataPoints.Gold,NASDAQ_API_ENDPART_URL);
  return makeApiCall(goldUrl);
};

export const getCurrencyPrices = async (days) => {
  let resultData = {};
  let endDate = new Date();

  const loopTimes = Math.ceil(days / 365);

  for(let i=0; i < loopTimes; i ++) {
    const startDate = new Date(endDate - (365*24*60*60*1000));
    const dates = `&start_date=${startDate.toISOString()}&end_date=${endDate.toISOString()}`;
    const currUrl = EXCHANGERATE_API_BASE_URL.concat(dates);
    const {data} = await makeApiCall(currUrl);
    resultData = {...resultData, ...data.rates}
    endDate = startDate;
  }

  return resultData;
};