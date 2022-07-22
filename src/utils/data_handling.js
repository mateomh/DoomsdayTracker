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

export const processFullData = (
  { dataset_data:{ data: oilData }},
  { dataset_data:{ data: goldData }},
  currencyData,
  days = 99
) => {
  const data = {};
  const dateKeys = Object.keys(currencyData.rates);

  for(let i = 0; i < days; i++) {
    data[oilData[i][0]] = {...data[oilData[i][0]], oil: oilData[i][1]}
    data[goldData[i][0]] = {...data[goldData[i][0]], gold: goldData[i][2]}
    if(dateKeys[i]) {
      data[dateKeys[i]] = {
        ...data[dateKeys[i]],
        COP: currencyData.rates[dateKeys[i]].COP,
        EUR: currencyData.rates[dateKeys[i]].EUR,
      }
    }
  }

  return data;
}