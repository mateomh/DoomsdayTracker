export const processOilPrices = ({ dataset_data:{ data: rawData } }, days) => {
  // data for oil prices goes from the newest one to the oldest one
  const data = [];

  for(let i = 0; i < days ; i++) {
    data.unshift(rawData[i]);
  }

  return data;
}

export const processGoldPrices = ({ dataset_data:{ data: rawData } }, days) => {
  // data for gold prices goes from the newest one to the oldest one
  const data = [];

  for(let i = 0; i < days ; i++) {
    data.unshift(rawData[i]);
  }
  
  return data;
}

export const processCurrencyData = (rawData) => {
  const dateKeys = Object.keys(rawData.rates);
  console.log("%%%%%%%%%%%% DATES",dateKeys);
}

export const processFullData = (oilData, goldData, currencyData, days) => {

}