export const setOilSinglePrice = (data) => {
  return {
    type: "OIL_ADD_SINGLE_PRICE",
    payload: data,
  }
}

export const setOilPrices = (data) => {
  return {
    type: "OIL_ADD_PRICES",
    payload: data,
  }
}

export const setGoldSinglePrice = (data) => {
  return {
    type: "GOLD_ADD_SINGLE_PRICE",
    payload: data,
  }
}

export const setGoldPrices = (data) => {
  return {
    type: "GOLD_ADD_PRICES",
    payload: data,
  }
}

export const setDollarSinglePrice = (data) => {
  return {
    type: "DOLLAR_ADD_SINGLE_PRICE",
    payload: data,
  }
}

export const setDollarPrices = (data) => {
  return {
    type: "DOLLAR_ADD_PRICES",
    payload: data,
  }
}

export const setEuroSinglePrice = (data) => {
  return {
    type: "EURO_ADD_SINGLE_PRICE",
    payload: data,
  }
}

export const setEuroPrices = (data) => {
  return {
    type: "EURO_ADD_PRICES",
    payload: data,
  }
}