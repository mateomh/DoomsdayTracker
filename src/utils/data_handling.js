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

export const formatChartData = (fullData) => {
  const dates = Object.keys(fullData);
  const oil = [];
  const gold = [];
  const cop = [];
  const eur = [];

  for(let i = 0; i < dates.length; i++) {
    fullData[dates[i]].oil ? oil.push(fullData[dates[i]].oil) : oil.push(0)
    fullData[dates[i]].gold ? gold.push(fullData[dates[i]].gold) : gold.push(0)
    fullData[dates[i]].COP ? cop.push(fullData[dates[i]].COP) : cop.push(0)
    fullData[dates[i]].EUR ? eur.push(fullData[dates[i]].COP * fullData[dates[i]].EUR) : eur.push(0)
  }

  return {
    dates,
    oil,
    gold,
    cop,
    eur,
  }
}