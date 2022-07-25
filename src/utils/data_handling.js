export const processOilPrices = ({ dataset_data:{ data: rawData } }, days) => {
  // data for oil prices goes from the newest one to the oldest one
  const data = [];
  let today = new Date();
  let stopDate = new Date(today - (days*24*60*60*1000));
  stopDate = stopDate.toISOString().substring(0,10);

  for(let i = 0; i < days ; i++) {
    if(rawData[i][0] <= stopDate) break;
    data.unshift(rawData[i]);
  }

  return data;
}

export const processGoldPrices = ({ dataset_data:{ data: rawData } }, days) => {
  // data for gold prices goes from the newest one to the oldest one
  const data = [];
  let today = new Date();
  let stopDate = new Date(today - (days*24*60*60*1000));
  stopDate = stopDate.toISOString().substring(0,10);

  for(let i = 0; i < days ; i++) {
    if(rawData[i][0] < stopDate) break;
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
  days = 180
) => {
  const data = {};
  const dateKeys = Object.keys(currencyData);
  let today = new Date();
  let stopDate = new Date(today - (days*24*60*60*1000));
  stopDate = stopDate.toISOString().substring(0,10);
  let lastValueCurrency = 1000;
  let lastValueOil = 80;
  let lastValueGold = 1500;

  for(let i = 0; i < dateKeys.length; i++) {
    if(goldData[i][0] >= stopDate) {
      if(goldData[i][2] > 100) lastValueGold = goldData[i][2];
      lastValueOil = oilData[i][1];
    }

    if(currencyData[dateKeys[i]].COP) lastValueCurrency = currencyData[dateKeys[i]].COP;
    
    data[dateKeys[i]] = {
      ...data[dateKeys[i]],
      COP: lastValueCurrency,
      EUR: currencyData[dateKeys[i]].EUR,
      oil: lastValueOil,
      gold: lastValueGold,
    }
  }

  return data;
}

export const formatChartData = (fullData) => {
  const dates = Object.keys(fullData).sort();
  const oil = [];
  const gold = [];
  const cop = [];
  const eur = [];

  for(let i = 0; i < dates.length; i++) {
    fullData[dates[i]].oil ? oil.push(fullData[dates[i]].oil) : oil.push(0)
    fullData[dates[i]].gold ? gold.push(fullData[dates[i]].gold) : gold.push(0)
    fullData[dates[i]].COP ? cop.push(fullData[dates[i]].COP) : cop.push(0)
    fullData[dates[i]].EUR ? eur.push(fullData[dates[i]].COP / fullData[dates[i]].EUR) : eur.push(0)
  }

  return {
    dates,
    oil,
    gold,
    cop,
    eur,
  }
}