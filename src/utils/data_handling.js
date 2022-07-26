export const processOilPrices = ({ dataset_data:{ data: rawData } }, days) => {
  // data for oil prices goes from the newest one to the oldest one
  const data = {};

  for(let i = 0; i < days ; i++) {
    data[rawData[i][0]] = rawData[i][1];
  }

  console.log("%%%%%%%%% INSIDE DATA", data);

  return data;
}

export const processGoldPrices = ({ dataset_data:{ data: rawData } }, days) => {
  // data for gold prices goes from the newest one to the oldest one
  const data = {};

  for(let i = 0; i < days ; i++) {
    data[rawData[i][0]] = rawData[i][2];
  }

  return data;
}

export const processCurrencyData = (rawData) => {
  const dateKeys = Object.keys(rawData.rates);
  console.log("%%%%%%%%%%%% DATES",dateKeys);
}

export const processFullData = (
  oilData,
  goldData,
  currencyData,
  days = 180
) => {
  const data = {};
  const dateKeys = Object.keys(currencyData);
  let lastValueCurrency = 1000;
  let lastValueOil = 80;
  let lastValueGold = 1500;

  for(let i = 0; i < dateKeys.length; i++) {
    if(goldData[dateKeys[i]]) lastValueGold = goldData[dateKeys[i]];
    if(oilData[dateKeys[i]]) lastValueOil = oilData[dateKeys[i]];
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

const normalizeData = (oilData, goldData, copData, eurData) => {
  const normalizedOil = [];
  const normalizedGold = [];
  const normalizedCop = [];
  const normalizedEur = [];
  const scalingFactor = 1.1
  const maxOil = Math.max(...oilData) * 1.5;
  const maxGold = Math.max(...goldData) * 1.5;
  const maxCurr = Math.max(...eurData) * scalingFactor;

  for(let i = 0; i < copData.length; i++) {
    normalizedOil[i] = oilData[i] / maxOil;
    normalizedGold[i] = goldData[i] / maxGold;
    normalizedCop[i] = copData[i] / maxCurr;
    normalizedEur[i] = eurData[i] / maxCurr;
  }

  return {
    normalizedOil,
    normalizedGold,
    normalizedCop,
    normalizedEur
  }
}

export const formatNormalizedChartData = (fullData) => {
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

  const {
    normalizedOil,
    normalizedGold,
    normalizedCop,
    normalizedEur
  } = normalizeData(oil, gold, cop, eur);

  return {
    dates,
    normalizedOil,
    normalizedGold,
    normalizedCop,
    normalizedEur
  }
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
    eur
  }
}
