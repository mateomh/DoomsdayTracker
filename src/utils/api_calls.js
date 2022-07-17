import axios from 'axios';

const nasdaqDataPoints = {
  Gold: "/LBMA/GOLD",
  Oil: "/OPEC/ORB",
};
Object.freeze(nasdaqDataPoints);

const NASDAQ_API_BASE_URL = "https://data.nasdaq.com/api/v3/datasets";
const NASDAQ_API_ENDPART_URL = `/data.json?api_key=${process.env.REACT_APP_NASDAQ_API_KEY}`

export const getOilPrices = async () => {
  const oilUrl = NASDAQ_API_BASE_URL.concat(nasdaqDataPoints.Oil,NASDAQ_API_ENDPART_URL);
  const {data} = await makeNadaqApiCall(oilUrl);
  console.log(data);
};

export const getGoldPrices = async () => {
  const goldUrl = NASDAQ_API_BASE_URL.concat(nasdaqDataPoints.Gold,NASDAQ_API_ENDPART_URL);
  const {data} = await makeNadaqApiCall(goldUrl);
  console.log(data);
};

const makeNadaqApiCall = (url) => {
  return axios.get(url, {responseType: 'json'});
};