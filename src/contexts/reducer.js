export const initialState = {
  oilPrices: [],
  goldPrices: [],
  dollarPrices: [],
  euroPrices: [],
}

export const storeReducer = (state, action) => {
  const {type, payload} = action;
  switch (type) {
    case "OIL_ADD_SINGLE_PRICE":
      return {...state, oilPrices: state.oilPrices.push(payload)}
    case "OIL_ADD_PRICES":
      return {...state, oilPrices: [...state.oilPrices, ...payload]}
    case "GOLD_ADD_SINGLE_PRICE":
      return {...state, goldPrices: state.goldPrices.push(payload)}
    case "GOLD_ADD_PRICES":
      return {...state, goldPrices: [...state.goldPrices, ...payload]}
    case "DOLLAR_ADD_SINGLE_PRICE":
      return {...state, dollarPrices: state.dollarPrices.push(payload)}
    case "DOLLAR_ADD_PRICES":
      return {...state, dollarPrices: [...state.dollarPrices, ...payload]}
    case "EURO_ADD_SINGLE_PRICE":
      return {...state, euroPrices: state.euroPrices.push(payload)}
    case "EURO_ADD_PRICES":
      return {...state, euroPrices: [...state.euroPrices, ...payload]}
    default:
      return state;
  }
}