export const initialState = {
  oilPrices: [],
  goldPrices: [],
  dollarPrices: [],
  euroPrices: [],
  dates: [],
  fullData: {},
}

interface State {
  oilPrices: any;
  goldPrices: any;
  dollarPrices: any;
  euroPrices: any;
  dates: any;
  fullData: any;
}

interface Action {
  type: string;
  payload: any;
}

export const storeReducer = (state: State, action: Action): State => {
  const {type, payload} = action;
  switch (type) {
    case "OIL_ADD_SINGLE_PRICE":
      return {...state, oilPrices: state.oilPrices.push(payload)}
    case "OIL_ADD_PRICES":
      return {...state, oilPrices: [...payload]}
    case "GOLD_ADD_SINGLE_PRICE":
      return {...state, goldPrices: state.goldPrices.push(payload)}
    case "GOLD_ADD_PRICES":
      return {...state, goldPrices: [...payload]}
    case "DOLLAR_ADD_SINGLE_PRICE":
      return {...state, dollarPrices: state.dollarPrices.push(payload)}
    case "DOLLAR_ADD_PRICES":
      return {...state, dollarPrices: [...payload]}
    case "EURO_ADD_SINGLE_PRICE":
      return {...state, euroPrices: state.euroPrices.push(payload)}
    case "EURO_ADD_PRICES":
      return {...state, euroPrices: [...payload]}
    case "ADD_SINGLE_DATE":
      return {...state, dates: state.dates.push(payload)}
    case "ADD_DATES":
      return {...state, dates: [...payload]}
    case "ADD_FULL_DATA":
      return {...state, fullData: payload}
    default:
      return state;
  }
}